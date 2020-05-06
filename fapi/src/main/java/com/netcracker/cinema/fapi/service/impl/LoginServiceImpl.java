package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullLoginDTO;
import com.netcracker.cinema.fapi.model.Login;
import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.service.LoginService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {
    private String rootPath = "http://localhost:8080/api/logins";

    @Override
    public List<Login> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Login[] loginResponse = restTemplate.getForObject(rootPath, Login[].class);
        return loginResponse == null ? Collections.emptyList() : Arrays.asList(loginResponse);
    }

    @Override
    public Login findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/?id=" + id, Login.class);
    }

    @Override
    public FullLoginDTO save(FullLoginDTO fullLoginDTO) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, fullLoginDTO, FullLoginDTO.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }

    @Override
    public FullLoginDTO findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/full/?id=" + id, FullLoginDTO.class);
    }

    @Override
    public User findUserByLoginId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/user/?id=" + id, User.class);
    }
}
