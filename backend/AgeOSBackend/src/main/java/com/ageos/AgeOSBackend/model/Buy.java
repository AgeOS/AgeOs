package com.ageos.AgeOSBackend.model;

import com.ageos.AgeOSBackend.enums.PackageType;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "tb_buy")
public class Buy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pk_id_buy;

    @Column(name = "method_payment")
    private String method_payment;

    @Column(name = "date_buy")
    private Date date_buy;

    @Column(name = "number_user")
    private int number_user;

    @Column(name = "address_user")
    private String address_user;

    @Enumerated(EnumType.STRING)
    @Column(name = "package_type")
    private PackageType packageType;

    @Column(name = "efi_charge_id", unique = true)
    private String efiChargeId;

    @Column(name = "payment_status")
    private String paymentStatus;

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getEfiChargeId() {
        return efiChargeId;
    }

    public void setEfiChargeId(String efiChargeId) {
        this.efiChargeId = efiChargeId;
    }

    public Long getPk_id_buy() {
        return pk_id_buy;
    }

    public void setPk_id_buy(Long pk_id_buy) {
        this.pk_id_buy = pk_id_buy;
    }

    public String getMethod_payment() {
        return method_payment;
    }

    public void setMethod_payment(String method_payment) {
        this.method_payment = method_payment;
    }

    public Date getDate_buy() {
        return date_buy;
    }

    public void setDate_buy(Date date_buy) {
        this.date_buy = date_buy;
    }


    public int getNumber_user() {
        return number_user;
    }

    public void setNumber_user(int number_user) {
        this.number_user = number_user;
    }

    public String getAddress_user() {
        return address_user;
    }

    public void setAddress_user(String address_user) {
        this.address_user = address_user;
    }

    public PackageType getPackageType() {
        return packageType;
    }

    public void setPackageType(PackageType packageType) {
        this.packageType = packageType;
    }

}
