package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullCinemaDTO;
import com.netcracker.cinema.fapi.model.Cinema;
import com.netcracker.cinema.fapi.model.Hall;

import java.util.List;

public interface CinemaService {
    List<Cinema> findAll();

    Cinema findById(Long id);

    Cinema save(Cinema cinema);

    void deleteById(Long id);

    FullCinemaDTO findFullById(Long id);

    List<Hall> findHallsByCinemaId(Long id);
}
