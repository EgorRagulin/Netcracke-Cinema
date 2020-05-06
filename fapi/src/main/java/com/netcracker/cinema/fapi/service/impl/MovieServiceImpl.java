package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullMovieDTO;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.Movie;
import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.service.MovieService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {
    private String backendServerUrl = "http://localhost:8080/api/movies";


    @Override
    public List<Movie> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Movie[] moviesResponse = restTemplate.getForObject(backendServerUrl, Movie[].class);
        return moviesResponse == null ? Collections.emptyList() : Arrays.asList(moviesResponse);
    }

    @Override
    public Movie findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/?id=" + id, Movie.class);
    }

    @Override
    public Movie save(Movie movie) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl, movie, Movie.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/?id=" + id);
    }

    @Override
    public PageDTO<FullMovieDTO> findPage(int pageNumber, int pageSize) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/?pageNumber=" + pageNumber + "&pageSize=" + pageSize, PageDTO.class);
    }

    @Override
    public List<Session> findSessionsByMovieId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        Session[] moviesResponse = restTemplate.getForObject(backendServerUrl + "/sessions/?id=" + id, Session[].class);
        return moviesResponse == null ? Collections.emptyList() : Arrays.asList(moviesResponse);
    }
}
