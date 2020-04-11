package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface MovieService {
    Page<Movie> findAllMovie(Pageable pageable);

    List<Movie>  findMovieByTitle(String title);

    Optional<Movie> findMovieById(Long id);

    Movie setMovie(Movie movie);

    void deleteMovieById(Long id);
}
