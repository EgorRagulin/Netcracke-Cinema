package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.Movie;
import com.netcracker.cinema.fapi.service.MovieService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {
    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<Movie> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Movie[] moviesResponse = restTemplate.getForObject(backendServerUrl + "/api/movies/", Movie[].class);
        return moviesResponse == null ? Collections.emptyList() : Arrays.asList(moviesResponse);
    }
}
