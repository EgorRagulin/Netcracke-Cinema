package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Cinema;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface CinemaService {
    List<Cinema> findAllCinema();

    Optional<Cinema> findCinemaByCinemaName(String cinemaName);

    Optional<Cinema> findCinemaById(Long id);

    Cinema setCinema(Cinema cinema);

    void deleteCinemaById(Long id);
}
