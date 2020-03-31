package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.Cinema;

import java.util.List;

public interface CinemaService {
    List<Cinema> findAllCinema();

    List<Cinema> findAllCinemaByCinemaName(String cinemaName);

    Cinema findCinemaById(Long id);

    Cinema setCinema(Cinema cinema);

    void deleteCinema(Cinema cinema);

    void deleteCinemaById(Long id);
}
