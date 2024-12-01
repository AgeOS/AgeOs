package com.ageos.AgeOSBackend.dto;

import com.ageos.AgeOSBackend.enums.PackageType;

public class BuyRequest {

    private PackageType packageType;
    private int numberUser;
    private String addressUser;

    // Getters e Setters
    public PackageType getPackageType() {
        return packageType;
    }

    public void setPackageType(PackageType packageType) {
        this.packageType = packageType;
    }

    public int getNumberUser() {
        return numberUser;
    }

    public void setNumberUser(int numberUser) {
        this.numberUser = numberUser;
    }

    public String getAddressUser() {
        return addressUser;
    }

    public void setAddressUser(String addressUser) {
        this.addressUser = addressUser;
    }
}
