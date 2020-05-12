package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.UserViewModel;
import com.netcracker.cinema.fapi.model.full.FullLoginViewModel;
import com.netcracker.cinema.fapi.model.LoginViewModel;

import java.util.List;

public interface LoginService {
    List<LoginViewModel> findAll();

    LoginViewModel findById(Long id);

    FullLoginViewModel save(FullLoginViewModel fullLoginViewModel);

    void deleteById(Long id);

    FullLoginViewModel findFullById(Long id);

    UserViewModel findUserByLoginId(Long id);

    LoginViewModel findLoginByUsername(String username);

    LoginViewModel save(LoginViewModel LoginViewModel);
}
