package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullCinemaDTO;
import com.netcracker.cinema.fapi.model.Cinema;
import com.netcracker.cinema.fapi.model.Hall;
import com.netcracker.cinema.fapi.service.CinemaService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class CinemaServiceImpl implements CinemaService {
    private String rootPath = "http://localhost:8080/api/cinemas";

    @Override
    public List<Cinema> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Cinema[] cinemasResponse = restTemplate.getForObject(rootPath, Cinema[].class);
        return cinemasResponse == null ? Collections.emptyList() : Arrays.asList(cinemasResponse);
    }

    @Override
    public Cinema findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(  rootPath + "/?id=" + id, Cinema.class);
    }

    @Override
    public Cinema save(Cinema cinema) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity( rootPath, cinema, Cinema.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete( rootPath + "/?id=" + id);
    }

    @Override
    public FullCinemaDTO findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(  rootPath + "/full/?id=" + id, FullCinemaDTO.class);
    }


    @Override
    public List<Hall> findHallsByCinemaId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        Hall[] cinemasResponse = restTemplate.getForObject(rootPath + "/halls/?id=" + id, Hall[].class);
        return cinemasResponse == null ? Collections.emptyList() : Arrays.asList(cinemasResponse);
    }
}
