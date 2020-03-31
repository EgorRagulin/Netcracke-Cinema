package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.Login;

import java.util.List;

public interface LoginService {
    List<Login> findAll();
}
