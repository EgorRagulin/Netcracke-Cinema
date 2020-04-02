package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.repository.LoginRepository;
import com.netcracker.cinema.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginRepository loginRepository;

    @Override
    public List<Login> findAllLogin() {
        return loginRepository.findAll();
    }

    @Override
    public Optional<Login> findLoginByUsernameAndPassword(String username, String password) {
        return loginRepository.findByUsernameAndPassword(username, password);
    }

    @Override
    public Optional<Login> findLoginById(Long id) {
        return loginRepository.findById(id);
    }

    @Override
    public Login setLogin(Login login) {
        return loginRepository.save(login);
    }

    @Override
    public void deleteLoginById(Long id) {
        loginRepository.deleteById(id);
    }
}
