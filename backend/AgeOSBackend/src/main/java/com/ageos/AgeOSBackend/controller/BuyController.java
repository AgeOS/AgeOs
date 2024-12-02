package com.ageos.AgeOSBackend.controller;

import com.ageos.AgeOSBackend.service.BuyService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/buy")
public class BuyController {

    @Autowired
    private BuyService buyService;

    @GetMapping("/calculate")
    public ResponseEntity<?> calculate(@RequestParam String packageType) {
        Double amount = buyService.calculateAmount(packageType);
        return ResponseEntity.ok("O valor do pacote " + packageType + " é: " + amount);
    }

    @PostMapping("/process")
    public ResponseEntity<?> processBuy(@RequestParam String packageType) {
        Double amount = buyService.calculateAmount(packageType);
        String result = buyService.processBuy(packageType, amount);
        return ResponseEntity.ok(result);
    }
}