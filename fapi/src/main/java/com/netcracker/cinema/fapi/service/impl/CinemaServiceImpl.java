package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.Cinema;
import com.netcracker.cinema.fapi.service.CinemaService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class CinemaServiceImpl implements CinemaService {
    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<Cinema> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Cinema[] cinemasResponse = restTemplate.getForObject(backendServerUrl + "/api/cinemas/", Cinema[].class);
        return cinemasResponse == null ? Collections.emptyList() : Arrays.asList(cinemasResponse);
    }
}
