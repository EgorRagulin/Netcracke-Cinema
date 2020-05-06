package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface MovieService {
    List<Movie> findAll();

    Page<Movie> findPage(Pageable pageable);

    Optional<Movie> findById(Long id);

    Movie save(Movie movie);

    void deleteById(Long id);
}
