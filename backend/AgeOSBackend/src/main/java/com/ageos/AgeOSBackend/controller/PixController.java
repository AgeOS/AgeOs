package com.ageos.AgeOSBackend.controller;

import com.ageos.AgeOSBackend.service.PixService;
import com.ageos.AgeOSBackend.repository.BuyRepository;
import com.ageos.AgeOSBackend.dto.BuyRequest;
import com.ageos.AgeOSBackend.model.Buy;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/pix")
public class PixController {

    @Autowired
    private PixService pixService;

    @Autowired
    private BuyRepository buyRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createPixCharge(@RequestBody BuyRequest buyRequest) {
        try {
            Buy buy = new Buy();
            buy.setPackageType(buyRequest.getPackageType());
            buy.setMethod_payment("PIX");
            buy.setNumber_user(buyRequest.getNumberUser());
            buy.setAddress_user(buyRequest.getAddressUser());

            JSONObject response = pixService.createAgeOSPixCharge(buy);

            if (response == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao criar cobrança PIX.");
            }

            return ResponseEntity.ok(response.toString());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: " + e.getMessage());
        }
    }

    @GetMapping("/buys")
    public ResponseEntity<?> listAllBuys() {
        try {
            List<Buy> buys = buyRepository.findAll();
            return ResponseEntity.ok(buys);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: " + e.getMessage());
        }
    }

    @GetMapping("/buy/{id}")
    public ResponseEntity getBuyById(@PathVariable Long id) {
        try {
            Optional<Buy> buy = buyRepository.findById(id);
            if (buy.isPresent()) {
                return ResponseEntity.ok(buy.get());
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Compra não encontrada.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: " + e.getMessage());
        }
    }
}
