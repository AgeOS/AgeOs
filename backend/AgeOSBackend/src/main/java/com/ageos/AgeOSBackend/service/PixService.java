package com.ageos.AgeOSBackend.service;

import br.com.efi.efisdk.EfiPay;
import br.com.efi.efisdk.exceptions.EfiPayException;
import com.ageos.AgeOSBackend.enums.PackageType;
import com.ageos.AgeOSBackend.model.Buy;
import com.ageos.AgeOSBackend.repository.BuyRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import javax.imageio.ImageIO;
import java.awt.*;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class PixService {

    @Value("${CLIENT_ID}")
    private String clientId;

    @Value("${CLIENT_SECRET}")
    private String clientSecret;

    @Value("${CERTIFICATE_PATH}")
    private String certificatePath;

    @Value("${SANDBOX_MODE}")
    private boolean isSandbox;

    @Autowired
    private BuyRepository buyRepository;

    public JSONObject createAgeOSPixCharge(Buy buy) {
        JSONObject options = configureJsonObject();


        Double amount = calculateAmount(buy);

        JSONObject body = new JSONObject();
        body.put("calendario", new JSONObject().put("expiracao", 3600));
        body.put("devedor", new JSONObject()
                .put("cpf", "12345678909") // Pode ser parametrizado com os dados do usuário
                .put("nome", "Nome do Comprador"));
        body.put("valor", new JSONObject().put("original", String.format("%.2f", amount)));
        body.put("chave", "sua-chave-pix-aqui");

        JSONArray infoAdicionais = new JSONArray();
        infoAdicionais.put(new JSONObject().put("nome", "Pacote").put("valor", buy.getPackageType().toString()));
        infoAdicionais.put(new JSONObject().put("nome", "Detalhe").put("valor", "Compra de AgeOS"));
        body.put("infoAdicionais", infoAdicionais);

        try {
            EfiPay efi = new EfiPay(options);
            JSONObject response = efi.call("pixCreateImmediateCharge", new HashMap<>(), body);

            // Salvar a compra no banco de dados
            buy.setDate_buy(new Date());
            buyRepository.save(buy);


            int id = response.getJSONObject("loc").getInt("id");
            pixGenerateQRCode(String.valueOf(id));

            return response;
        } catch (EfiPayException e) {
            logError(e);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    private Double calculateAmount(Buy buy) {
        if (buy.getPackageType() == PackageType.COMUM) {
            return 0.01;
        } else if (buy.getPackageType() == PackageType.FAMILIA) {
            return 0.02;
        }
        return 0.0;
    }

    private void pixGenerateQRCode(String id) {
        JSONObject options = configureJsonObject();

        HashMap<String, String> params = new HashMap<>();
        params.put("id", id);

        try {
            EfiPay efi = new EfiPay(options);
            Map<String, Object> response = efi.call("pixGenerateQRCode", params, new HashMap<>());


            String base64Image = ((String) response.get("imagemQrcode")).split(",")[1];
            byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64Image);

            File outputFile = new File("qrCodeImage.png");
            ImageIO.write(ImageIO.read(new ByteArrayInputStream(imageBytes)), "png", outputFile);


            Desktop desktop = Desktop.getDesktop();
            desktop.open(outputFile);

        } catch (EfiPayException e) {
            logError(e);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    private JSONObject configureJsonObject() {
        JSONObject options = new JSONObject();
        options.put("client_id", clientId);
        options.put("client_secret", clientSecret);
        options.put("certificate", certificatePath);
        options.put("sandbox", isSandbox);
        return options;
    }

    private void logError(EfiPayException e) {
        System.out.println(e.getError());
        System.out.println(e.getErrorDescription());
    }
}
