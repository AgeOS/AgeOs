package com.ageos.AgeOSBackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pk_id_user;

    @Column( name = "user_name")
    private String name;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "fk_id_ageos")
    private AgeOS ageOS;

    public Long getPk_id_user() {
        return pk_id_user;
    }

    public void setPk_id_user(Long pk_id_user) {
        this.pk_id_user = pk_id_user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public AgeOS getAgeOS() {
        return ageOS;
    }

    public void setAgeOS(AgeOS ageOS) {
        this.ageOS = ageOS;
    }
}
