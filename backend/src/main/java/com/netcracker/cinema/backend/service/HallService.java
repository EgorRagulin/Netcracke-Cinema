package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Hall;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface HallService {
    List<Hall> findAll();

    Optional<Hall> findById(Long id);

    Hall save(Hall hall);

    void deleteById(Long id);
}
