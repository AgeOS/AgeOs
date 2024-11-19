package com.ageos.AgeOSBackend.model;

import com.ageos.AgeOSBackend.enums.PackageType;
import jakarta.persistence.*;

@Entity
@Table(name = "tb_ageos")
public class AgeOS {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long pk_id_ageos;

    @Enumerated(EnumType.STRING)
    @Column(name = "package_type")
    private PackageType packageType;

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
}
