package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullHallDTO;
import com.netcracker.cinema.fapi.model.Hall;
import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.service.HallService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class HallServiceImpl implements HallService {
    private String rootPath = "http://localhost:8080/api/halls";

    @Override
    public List<Hall> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Hall[] hallsResponse = restTemplate.getForObject(rootPath, Hall[].class);
        return hallsResponse == null ? Collections.emptyList() : Arrays.asList(hallsResponse);
    }

    @Override
    public Hall findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath  + "/?id=" + id, Hall.class);
    }

    @Override
    public FullHallDTO save(FullHallDTO fullHallDTO) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, fullHallDTO, FullHallDTO.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }

    @Override
    public FullHallDTO findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath  + "/full/?id=" + id, FullHallDTO.class);
    }

    @Override
    public List<Session> findSessionsByHallId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        Session[] hallsResponse = restTemplate.getForObject(rootPath + "/sessions/?id=" + id, Session[].class);
        return hallsResponse == null ? Collections.emptyList() : Arrays.asList(hallsResponse);
    }
}
