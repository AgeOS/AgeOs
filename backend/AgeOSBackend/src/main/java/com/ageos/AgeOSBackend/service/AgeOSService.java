package com.ageos.AgeOSBackend.service;

import com.ageos.AgeOSBackend.repository.AgeOSRepository;
import com.ageos.AgeOSBackend.repository.BuyRepository;
import com.ageos.AgeOSBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgeOSService {

    @Autowired
    private BuyRepository buyRepository;

    @Autowired
    private AgeOSRepository ageOSRepository;

    @Autowired
    private UserRepository userRepository;


}
