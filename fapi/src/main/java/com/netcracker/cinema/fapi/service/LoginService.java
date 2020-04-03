package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.Login;

import java.util.List;

public interface LoginService {
    List<Login> findAllLogin();

    List<Login> findAllLoginByUserName(String userName);

    Login findLoginById(Long id);

    Login setLogin(Login login);

    void deleteLoginById(Long id);
}
