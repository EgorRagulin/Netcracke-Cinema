package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Hall;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface HallService {
    List<Hall> findAllHall();

    List<Hall> findAllHallByHallNumber(int hallNumber);

    Hall findHallById(Long id);

    Hall setHall(Hall hall);
}
