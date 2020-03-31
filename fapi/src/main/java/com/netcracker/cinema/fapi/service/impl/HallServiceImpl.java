package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.Hall;
import com.netcracker.cinema.fapi.service.HallService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class HallServiceImpl implements HallService {
    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<Hall> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Hall[] hallsResponse = restTemplate.getForObject(backendServerUrl + "/api/halls/", Hall[].class);
        return hallsResponse == null ? Collections.emptyList() : Arrays.asList(hallsResponse);
    }
}
