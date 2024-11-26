package com.ageos.AgeOSBackend.repository;

import com.ageos.AgeOSBackend.model.Buy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyRepository extends JpaRepository<Buy,Long> {
}
