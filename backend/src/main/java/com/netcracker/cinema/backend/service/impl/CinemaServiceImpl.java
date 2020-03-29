package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Cinema;
import com.netcracker.cinema.backend.repository.CinemaRepository;
import com.netcracker.cinema.backend.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CinemaServiceImpl implements CinemaService {
    @Autowired
    private CinemaRepository cinemaRepository;

    @Override
    public List<Cinema> find(String cinema) {
        return cinemaRepository.findByCinemaName(cinema);
    }
}
