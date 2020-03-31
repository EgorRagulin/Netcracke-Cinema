package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.Hall;

import java.util.List;

public interface HallService {
    List<Hall> findAllHall();

    List<Hall> findAllHallByHallNumber(int hallNumber);

    Hall findHallById(Long id);

    Hall setHall(Hall hall);

    void deleteHall(Hall hall);

    void deleteHallById(Long id);
}
