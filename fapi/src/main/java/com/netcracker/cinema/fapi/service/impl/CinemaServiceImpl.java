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
    public List<Cinema> findAllCinema() {
        RestTemplate restTemplate = new RestTemplate();
        Cinema[] cinemasResponse = restTemplate.getForObject(backendServerUrl + "/api/cinemas/", Cinema[].class);
        return cinemasResponse == null ? Collections.emptyList() : Arrays.asList(cinemasResponse);
    }

    @Override
    public List<Cinema> findAllCinemaByCinemaName(String cinemaName) {
        RestTemplate restTemplate = new RestTemplate();
        Cinema[] cinemasResponse = restTemplate.getForObject(backendServerUrl + "/api/cinemas/" + cinemaName, Cinema[].class);
        return cinemasResponse == null ? Collections.emptyList() : Arrays.asList(cinemasResponse);
    }

    @Override
    public Cinema findCinemaById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/cinemas/id=" + id, Cinema.class);
    }

    @Override
    public Cinema setCinema(Cinema cinema) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/cinemas/", cinema, Cinema.class).getBody();
    }

    @Override
    public void deleteCinemaById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/cinemas/id=" + id);
    }
}
