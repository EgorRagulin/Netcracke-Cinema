package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Login;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface LoginService {
    List<Login> findAll();

    Optional<Login> findById(Long id);

    Login save(Login login);

    void deleteById(Long id);

    Optional<Login> findByUsername(String login);
}
