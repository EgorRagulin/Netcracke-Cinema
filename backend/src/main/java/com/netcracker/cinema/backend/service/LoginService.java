package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Login;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface LoginService {
    List<Login> findAllLogin();

    Optional<Login> findLoginByUsernameAndPassword(String username, String password);

    Optional<Login> findLoginById(Long id);

    Login setLogin(Login login);

    void deleteLoginById(Long id);
}
