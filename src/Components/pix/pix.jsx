import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode";

function QrCodeComponent({ chavePix, valor, nomeRecebedor, cidadeRecebedor }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const gerarCodigoPix = () => {
      const sanitizeText = (text) => {
        return text
          .normalize("NFKD")
          .replace(/[\u0300-\u036f]/g, "")
          .toUpperCase();
      };

      const formatValue = (value) => {
        return parseFloat(value).toFixed(2);
      };

      const id = (id, content) => {
        const length = content.length.toString().padStart(2, "0");
        return id + length + content;
      };

      // IDs dos campos
      const ID_PAYLOAD_FORMAT = "00";
      const ID_POINT_OF_INITIATION_METHOD = "01";
      const ID_MERCHANT_ACCOUNT_INFORMATION = "26";
      const ID_MAI_GUI = "00";
      const ID_MAI_KEY = "01";
      const ID_MERCHANT_CATEGORY_CODE = "52";
      const ID_TRANSACTION_CURRENCY = "53";
      const ID_TRANSACTION_AMOUNT = "54";
      const ID_COUNTRY_CODE = "58";
      const ID_MERCHANT_NAME = "59";
      const ID_MERCHANT_CITY = "60";
      const ID_ADDITIONAL_DATA_FIELD_TEMPLATE = "62";
      const ID_ADF_TXID = "05";
      const ID_CRC16 = "63";

      // Montagem dos campos
      const payloadFormatIndicator = id(ID_PAYLOAD_FORMAT, "01");
      const pointOfInitiationMethod = id(ID_POINT_OF_INITIATION_METHOD, "12"); // 12 para QR Code dinâmico
      const gui = id(ID_MAI_GUI, "br.gov.bcb.pix");
      const chave = id(ID_MAI_KEY, chavePix.replace(/\D/g, ""));
      const merchantAccountInformation = id(
        ID_MERCHANT_ACCOUNT_INFORMATION,
        gui + chave
      );
      const merchantCategoryCode = id(ID_MERCHANT_CATEGORY_CODE, "0000");
      const transactionCurrency = id(ID_TRANSACTION_CURRENCY, "986");
      const transactionAmount = valor
        ? id(ID_TRANSACTION_AMOUNT, formatValue(valor))
        : "";
      const countryCode = id(ID_COUNTRY_CODE, "BR");
      const merchantName = id(
        ID_MERCHANT_NAME,
        sanitizeText(nomeRecebedor).substring(0, 25) // Limite de 25 caracteres
      );
      const merchantCity = id(
        ID_MERCHANT_CITY,
        sanitizeText(cidadeRecebedor).substring(0, 15) // Limite de 15 caracteres
      );

      // Campos adicionais
      const txidValue = "PIX123"; // Use um identificador único aqui (até 25 caracteres)
      const txId = id(ID_ADF_TXID, txidValue);
      const additionalDataFieldTemplate = id(
        ID_ADDITIONAL_DATA_FIELD_TEMPLATE,
        txId
      );

      // Montagem do payload sem o CRC16
      const payloadSemCRC16 =
        payloadFormatIndicator +
        pointOfInitiationMethod +
        merchantAccountInformation +
        merchantCategoryCode +
        transactionCurrency +
        transactionAmount +
        countryCode +
        merchantName +
        merchantCity +
        additionalDataFieldTemplate +
        ID_CRC16 +
        "04"; // '04' indica que o CRC16 terá 4 caracteres

      // Cálculo do CRC16
      const crc16 = calcularCRC16(payloadSemCRC16);

      // Payload final
      const payload = payloadSemCRC16 + crc16;

      return payload;
    };

    const calcularCRC16 = (payload) => {
      let polinomio = 0x1021;
      let resultado = 0xffff;

      for (let i = 0; i < payload.length; i++) {
        resultado ^= payload.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
          if ((resultado & 0x8000) !== 0) {
            resultado = (resultado << 1) ^ polinomio;
          } else {
            resultado <<= 1;
          }
          resultado &= 0xffff;
        }
      }

      return resultado.toString(16).toUpperCase().padStart(4, "0");
    };

    const codigoPix = gerarCodigoPix();

    QRCode.toCanvas(canvasRef.current, codigoPix, function (error) {
      if (error) console.error(error);
    });
  }, [chavePix, valor, nomeRecebedor, cidadeRecebedor]);

  return <canvas ref={canvasRef} />;
}
QrCodeComponent.propTypes = {
  chavePix: PropTypes.string.isRequired,
  valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  nomeRecebedor: PropTypes.string.isRequired,
  cidadeRecebedor: PropTypes.string.isRequired,
};

export default QrCodeComponent;
