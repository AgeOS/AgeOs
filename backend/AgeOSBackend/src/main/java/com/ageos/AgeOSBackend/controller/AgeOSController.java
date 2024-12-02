package com.ageos.AgeOSBackend.controller;

import com.ageos.AgeOSBackend.model.User;
import com.ageos.AgeOSBackend.service.AgeOsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/ageos")
public class AgeOSController {

    @Autowired
    private AgeOsService ageOsService;

    @GetMapping("/calculate-package")
    public ResponseEntity<?> calculatePackage(@RequestParam String packageType) {
        Double amount = ageOsService.calculatePackageAmount(packageType);
        return ResponseEntity.ok("O valor do pacote " + packageType + " é: " + amount);
    }

    @PostMapping("/register-package")
    public ResponseEntity<?> registerPackage(@RequestBody User user, @RequestParam String packageType) {
        String result = ageOsService.registerAgeOsPackage(user, packageType);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/info")
    public ResponseEntity<?> getAgeOsInfo() {
        return ResponseEntity.ok(ageOsService.getAgeOsInfo());
    }
}