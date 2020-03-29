package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Cinema;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CinemaService {
    List<Cinema> find(String cinemaName);
}
