package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Cinema;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface CinemaService {
    List<Cinema> findAll();

    Optional<Cinema> findById(Long id);

    Cinema save(Cinema cinema);

    void deleteById(Long id);
}
