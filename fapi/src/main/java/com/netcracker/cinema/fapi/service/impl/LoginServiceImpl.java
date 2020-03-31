package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.Login;
import com.netcracker.cinema.fapi.service.LoginService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {
    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<Login> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Login[] loginResponse = restTemplate.getForObject(backendServerUrl + "/api/login/", Login[].class);
        return loginResponse == null ? Collections.emptyList() : Arrays.asList(loginResponse);
    }
}
