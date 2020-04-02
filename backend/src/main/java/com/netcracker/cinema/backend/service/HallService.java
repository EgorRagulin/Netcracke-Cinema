package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Hall;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface HallService {
    List<Hall> findAllHall();

    Optional<Hall> findHallById(Long id);

    Hall setHall(Hall hall);

    void deleteHallById(Long id);
}
