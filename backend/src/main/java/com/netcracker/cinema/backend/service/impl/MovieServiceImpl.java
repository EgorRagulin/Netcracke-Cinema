package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.repository.MovieRepository;
import com.netcracker.cinema.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MovieServiceImpl implements MovieService {
    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<Movie> findAll() {
        return movieRepository.findAll();
    }
}
