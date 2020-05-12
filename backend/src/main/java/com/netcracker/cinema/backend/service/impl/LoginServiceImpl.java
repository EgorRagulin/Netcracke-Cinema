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
    public List<Login> findAll() {
        return loginRepository.findAll();
    }

    @Override
    public Optional<Login> findById(Long id) {
        return loginRepository.findById(id);
    }

    @Override
    public Login save(Login login) {
        return loginRepository.save(login);
    }

    @Override
    public void deleteById(Long id) {
        loginRepository.deleteById(id);
    }

    @Override
    public Optional<Login> findByUsername(String username) {
        return loginRepository.findByUsername(username);
    }
}
