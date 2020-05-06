package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullLoginDTO;
import com.netcracker.cinema.fapi.model.Login;
import com.netcracker.cinema.fapi.model.User;

import java.util.List;

public interface LoginService {
    List<Login> findAll();

    Login findById(Long id);

    FullLoginDTO save(FullLoginDTO fullLoginDTO);

    void deleteById(Long id);

    FullLoginDTO findFullById(Long id);

    User findUserByLoginId(Long id);
}
