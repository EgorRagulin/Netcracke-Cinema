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
    public List<Login> findAllLogin() {
        RestTemplate restTemplate = new RestTemplate();
        Login[] loginResponse = restTemplate.getForObject(backendServerUrl + "/api/logins/", Login[].class);
        return loginResponse == null ? Collections.emptyList() : Arrays.asList(loginResponse);
    }

    @Override
    public List<Login> findAllLoginByUserName(String userName) {
        RestTemplate restTemplate = new RestTemplate();
        Login[] cinemasResponse = restTemplate.getForObject(backendServerUrl + "/api/logins/" + userName, Login[].class);
        return cinemasResponse == null ? Collections.emptyList() : Arrays.asList(cinemasResponse);
    }

    @Override
    public Login findLoginById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/logins/id=" + id, Login.class);
    }

    @Override
    public Login setLogin(Login login) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/logins/", login, Login.class).getBody();
    }

    @Override
    public void deleteLogin(Login login) {

    }

    @Override
    public void deleteLoginById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/logins/id=" + id);
    }
}
