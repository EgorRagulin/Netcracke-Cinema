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
    public List<Hall> findAllHall() {
        RestTemplate restTemplate = new RestTemplate();
        Hall[] hallsResponse = restTemplate.getForObject(backendServerUrl + "/api/halls/", Hall[].class);
        return hallsResponse == null ? Collections.emptyList() : Arrays.asList(hallsResponse);
    }

    @Override
    public List<Hall> findAllHallByHallNumber(int hallNumber) {
        RestTemplate restTemplate = new RestTemplate();
        Hall[] hallsResponse = restTemplate.getForObject(backendServerUrl + "/api/halls/" + hallNumber, Hall[].class);
        return hallsResponse == null ? Collections.emptyList() : Arrays.asList(hallsResponse);
    }

    @Override
    public Hall findHallById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/halls/id=" + id, Hall.class);
    }

    @Override
    public Hall setHall(Hall hall) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/cinemas/", hall, Hall.class).getBody();
    }

    @Override
    public void deleteHall(Hall hall) {

    }

    @Override
    public void deleteHallById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/halls/id=" + id);
    }
}
