package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.MovieViewModel;
import com.netcracker.cinema.fapi.model.all.movie.genre.AllMovieGenreModel;
import com.netcracker.cinema.fapi.model.full.FullMovieViewModel;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.SessionViewModel;
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
    public List<MovieViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        MovieViewModel[] moviesResponse = restTemplate.getForObject(backendServerUrl, MovieViewModel[].class);
        return moviesResponse == null ? Collections.emptyList() : Arrays.asList(moviesResponse);
    }

    @Override
    public MovieViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/?id=" + id, MovieViewModel.class);
    }

    @Override
    public MovieViewModel save(MovieViewModel movieViewModel) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl, movieViewModel, MovieViewModel.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/?id=" + id);
    }

    @Override
    public PageDTO<FullMovieViewModel> findPage(int pageNumber, int pageSize) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/?pageNumber=" + pageNumber + "&pageSize=" + pageSize, PageDTO.class);
    }

    @Override
    public List<SessionViewModel> findSessionsByMovieId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        SessionViewModel[] moviesResponse = restTemplate.getForObject(backendServerUrl + "/sessions/?id=" + id, SessionViewModel[].class);
        return moviesResponse == null ? Collections.emptyList() : Arrays.asList(moviesResponse);
    }

    @Override
    public AllMovieGenreModel getAllGenres() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/all-genres", AllMovieGenreModel.class);
    }
}
