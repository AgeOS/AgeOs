package com.ageos.AgeOSBackend.model;

import com.ageos.AgeOSBackend.enums.PackageType;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "tb_buy")
public class Buy {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    private PackageType package_type;

    @OneToOne
    @JoinColumn(name = "fk_id_user", referencedColumnName = "pk_id_user")
    private User user;

    @OneToOne(mappedBy = "buy", cascade = CascadeType.ALL)
    private AgeOS ageOS;

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

    public PackageType getPackage_type() {
        return package_type;
    }

    public void setPackage_type(PackageType package_type) {
        this.package_type = package_type;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public AgeOS getAgeOS() {
        return ageOS;
    }

    public void setAgeOS(AgeOS ageOS) {
        this.ageOS = ageOS;
    }
}
