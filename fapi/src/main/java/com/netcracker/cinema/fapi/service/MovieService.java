package com.netcracker.cinema.fapi.service;


import com.netcracker.cinema.fapi.DTO.FullDTO.FullMovieDTO;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.Movie;
import com.netcracker.cinema.fapi.model.Session;

import java.util.List;

public interface MovieService {
    List<Movie> findAll();

    Movie findById(Long id);

    Movie save(Movie movie);

    void deleteById(Long id);

    PageDTO<FullMovieDTO> findPage(int pageNumber, int pageSize);

    List<Session> findSessionsByMovieId(Long id);
}
