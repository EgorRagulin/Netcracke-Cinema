package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.Movie;

import java.util.List;

public interface MovieService {
    List<Movie> findAllMovie();

    List<Movie>  findMovieByTitle(String title);

    Movie findMovieById(Long id);

    Movie setMovie(Movie movie);

    void deleteMovieById(Long id);
}
