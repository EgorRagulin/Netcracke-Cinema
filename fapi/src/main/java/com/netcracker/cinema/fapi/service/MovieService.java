package com.netcracker.cinema.fapi.service;


import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.full.FullMovieViewModel;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.MovieViewModel;

import java.util.List;

public interface MovieService {
    List<MovieViewModel> findAll();

    MovieViewModel findById(Long id);

    MovieViewModel save(MovieViewModel movieViewModel);

    void deleteById(Long id);

    PageDTO<FullMovieViewModel> findPage(int pageNumber, int pageSize);

    List<SessionViewModel> findSessionsByMovieId(Long id);
}
