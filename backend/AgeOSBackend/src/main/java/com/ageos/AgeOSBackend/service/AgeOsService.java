package com.ageos.AgeOSBackend.service;

import com.ageos.AgeOSBackend.model.User;
import org.springframework.stereotype.Service;




@Service
public class AgeOsService {

    public Double calculatePackageAmount(String packageType) {
        switch (packageType.toUpperCase()) {
            case "COMUM":
                return 0.01;
            case "FAMILIA":
                return 0.02;
            default:
                return 0.0;
        }
    }

    public String registerAgeOsPackage(User user, String packageType) {

        return "Pacote " + packageType + " registrado para o usuário: " + user.getName();
    }

    public String getAgeOsInfo() {
        return "Bem-vindo ao Age OS - Soluções para segurança e usabilidade!";
    }
}
