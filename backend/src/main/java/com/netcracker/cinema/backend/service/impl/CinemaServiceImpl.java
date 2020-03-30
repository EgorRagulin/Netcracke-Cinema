package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Cinema;
import com.netcracker.cinema.backend.repository.CinemaRepository;
import com.netcracker.cinema.backend.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CinemaServiceImpl implements CinemaService {
    @Autowired
    private CinemaRepository cinemaRepository;


    @Override
    public List<Cinema> findAllCinema() {
        return cinemaRepository.findAll();
    }

    @Override
    public List<Cinema> findAllCinemaByCinemaName(String cinemaName) {
        return cinemaRepository.findAllByCinemaName(cinemaName);
    }

    @Override
    public Cinema findCinemaById(Long id) {
        return cinemaRepository.findById(id).get();
    }

    @Override
    public Cinema setCinema(Cinema cinema) {
        cinemaRepository.save(cinema);
        return cinema;
    }
}
