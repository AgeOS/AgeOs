package com.ageos.AgeOSBackend.service;

import org.springframework.stereotype.Service;

@Service
public class BuyService {

    public Double calculateAmount(String packageType) {
        switch (packageType.toUpperCase()) {
            case "COMUM":
                return 0.01;
            case "FAMILIA":
                return 0.02;
            default:
                return 0.0;
        }
    }

    public String processBuy(String packageType, Double amount) {
        return "Compra do pacote " + packageType + " no valor de R$ " + amount + " processada com sucesso!";
    }
}
