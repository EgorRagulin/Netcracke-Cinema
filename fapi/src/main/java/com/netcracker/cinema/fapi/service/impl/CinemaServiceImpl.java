package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.CinemaViewModel;
import com.netcracker.cinema.fapi.model.HallViewModel;
import com.netcracker.cinema.fapi.model.full.FullCinemaViewModel;
import com.netcracker.cinema.fapi.service.CinemaService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class CinemaServiceImpl implements CinemaService {
    private String rootPath = "http://localhost:8080/api/cinemas";

    @Override
    public List<CinemaViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        CinemaViewModel[] cinemasResponse = restTemplate.getForObject(rootPath, CinemaViewModel[].class);
        return cinemasResponse == null ? Collections.emptyList() : Arrays.asList(cinemasResponse);
    }

    @Override
    public CinemaViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(  rootPath + "/?id=" + id, CinemaViewModel.class);
    }

    @Override
    public CinemaViewModel save(CinemaViewModel cinema) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity( rootPath, cinema, CinemaViewModel.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete( rootPath + "/?id=" + id);
    }

    @Override
    public FullCinemaViewModel findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(  rootPath + "/full/?id=" + id, FullCinemaViewModel.class);
    }


    @Override
    public List<HallViewModel> findHallsByCinemaId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        HallViewModel[] cinemasResponse = restTemplate.getForObject(rootPath + "/halls/?id=" + id, HallViewModel[].class);
        return cinemasResponse == null ? Collections.emptyList() : Arrays.asList(cinemasResponse);
    }

    @Override
    public List<HallViewModel> addHall(CinemaViewModel cinema) {
        RestTemplate restTemplate = new RestTemplate();
        HallViewModel[] cinemasResponse = restTemplate.postForEntity( rootPath + "/add-hall", cinema, HallViewModel[].class).getBody();
        return cinemasResponse == null ? Collections.emptyList() : Arrays.asList(cinemasResponse);
    }
}
