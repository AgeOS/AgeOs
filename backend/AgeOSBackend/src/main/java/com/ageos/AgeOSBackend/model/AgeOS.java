package com.ageos.AgeOSBackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_ageos")
public class AgeOS {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long pk_id_ageos;

    @Column(name = "package_type")
    private Enum package_type;

    public Long getPk_id_ageos() {
        return pk_id_ageos;
    }

    public void setPk_id_ageos(Long pk_id_ageos) {
        this.pk_id_ageos = pk_id_ageos;
    }

    public Enum getPackage_type() {
        return package_type;
    }

    public void setPackage_type(Enum package_type) {
        this.package_type = package_type;
    }
}
