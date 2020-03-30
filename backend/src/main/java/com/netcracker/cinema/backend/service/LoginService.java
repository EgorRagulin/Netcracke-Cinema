package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Login;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface LoginService {
    List<Login> findAllLogin();

    List<Login> findAllLoginByUserName(String userName);

    Login findLoginById(int id);

    Login setLogin(Login login);
}
