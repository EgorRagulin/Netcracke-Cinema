package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.HallViewModel;
import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.full.FullHallViewModel;
import com.netcracker.cinema.fapi.service.HallService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class HallServiceImpl implements HallService {
    private String rootPath = "http://localhost:8080/api/halls";

    @Override
    public List<HallViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        HallViewModel[] hallsResponse = restTemplate.getForObject(rootPath, HallViewModel[].class);
        return hallsResponse == null ? Collections.emptyList() : Arrays.asList(hallsResponse);
    }

    @Override
    public HallViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath  + "/?id=" + id, HallViewModel.class);
    }

    @Override
    public FullHallViewModel save(FullHallViewModel fullHallViewModel) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, fullHallViewModel, FullHallViewModel.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }

    @Override
    public FullHallViewModel findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath  + "/full/?id=" + id, FullHallViewModel.class);
    }

    @Override
    public List<SessionViewModel> findSessionsByHallId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        SessionViewModel[] hallsResponse = restTemplate.getForObject(rootPath + "/sessions/?id=" + id, SessionViewModel[].class);
        return hallsResponse == null ? Collections.emptyList() : Arrays.asList(hallsResponse);
    }
}
