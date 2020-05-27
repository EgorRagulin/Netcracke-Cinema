package com.netcracker.cinema.fapi.service;


import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.all.movie.genre.AllMovieGenreModel;
import com.netcracker.cinema.fapi.model.full.FullMovieViewModel;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.MovieViewModel;
import com.netcracker.cinema.fapi.model.full.FullSessionViewModel;

import java.util.List;

public interface MovieService {
    List<MovieViewModel> findAll();

    FullMovieViewModel findById(Long id);

    FullMovieViewModel save(MovieViewModel movie);

    void deleteById(Long id);

    PageDTO<FullMovieViewModel> findPage(int pageNumber, int pageSize);

    AllMovieGenreModel getAllGenres();

    List<SessionViewModel> findSessionsByMovieId(Long id);

    List<FullSessionViewModel> findFullSessionsByMovieId(Long id);
}
