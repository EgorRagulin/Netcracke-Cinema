package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.repository.LoginRepository;
import com.netcracker.cinema.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginRepository loginRepository;

    @Override
    public Login find(String username) {
        return loginRepository.findByUsername(username);
    }
}
