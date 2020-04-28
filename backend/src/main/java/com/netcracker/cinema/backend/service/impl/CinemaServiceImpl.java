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
    public List<Cinema> findAll() {
        return cinemaRepository.findAll();
    }

    @Override
    public Optional<Cinema> findById(Long id) {
        return cinemaRepository.findById(id);
    }

    @Override
    public Cinema save(Cinema cinema) {
        cinemaRepository.save(cinema);
        return cinema;
    }

    @Override
    public void deleteById(Long id) {
        cinemaRepository.deleteById(id);
    }
}
