package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.repository.LoginRepository;
import com.netcracker.cinema.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginRepository loginRepository;

    @Override
    public List<Login> findAllLogin() {
        return loginRepository.findAll();
    }

    @Override
    public List<Login> findAllLoginByUserName(String userName) {
        return loginRepository.findAllByUsername(userName);
    }

    @Override
    public Login findLoginById(int id) {
        return loginRepository.findById(id).get();
    }

    @Override
    public Login setLogin(Login login) {
        return loginRepository.save(login);
    }
}
