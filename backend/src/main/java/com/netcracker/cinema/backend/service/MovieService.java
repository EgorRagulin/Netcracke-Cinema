package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Movie;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface MovieService {
    List<Movie> findAll();
}
