package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.repository.MovieRepository;
import com.netcracker.cinema.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class MovieServiceImpl implements MovieService {
    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<Movie> findAllMovie() {
        return movieRepository.findAll();
    }

    @Override
    public List<Movie>  findMovieByTitle(String title) {
        return movieRepository.findAllByTitle(title);
    }

    @Override
    public Optional<Movie> findMovieById(Long id) {
        return movieRepository.findById(id);
    }

    @Override
    public Movie setMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public void deleteMovieById(Long id) {
        movieRepository.deleteById(id);
    }
}
