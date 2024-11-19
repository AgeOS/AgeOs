package com.ageos.AgeOSBackend.model;

import com.ageos.AgeOSBackend.enums.PackageType;
import jakarta.persistence.*;

@Entity
@Table(name = "tb_ageos")
public class AgeOS {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pk_id_ageos;

    @Enumerated(EnumType.STRING)
    @Column(name = "package_type")
    private PackageType packageType;

    @OneToOne
    @JoinColumn(name = "fk_id_user", referencedColumnName = "pk_id_user")
    private User user;

    @OneToOne
    @JoinColumn(name = "fk_id_buy", referencedColumnName = "pk_id_buy")
    private Buy buy;

    public Long getPk_id_ageos() {
        return pk_id_ageos;
    }

    public void setPk_id_ageos(Long pk_id_ageos) {
        this.pk_id_ageos = pk_id_ageos;
    }

    public PackageType getPackageType() {
        return packageType;
    }

    public void setPackageType(PackageType packageType) {
        this.packageType = packageType;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Buy getBuy() {
        return buy;
    }

    public void setBuy(Buy buy) {
        this.buy = buy;
    }
}
