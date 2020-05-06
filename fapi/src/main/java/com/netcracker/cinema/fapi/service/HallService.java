package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullHallDTO;
import com.netcracker.cinema.fapi.model.Hall;
import com.netcracker.cinema.fapi.model.Session;

import java.util.List;

public interface HallService {
    List<Hall> findAll();

    Hall findById(Long id);

    FullHallDTO save(FullHallDTO fullHallDTO);

    void deleteById(Long id);

    FullHallDTO findFullById(Long id);

    List<Session> findSessionsByHallId(Long id);
}
