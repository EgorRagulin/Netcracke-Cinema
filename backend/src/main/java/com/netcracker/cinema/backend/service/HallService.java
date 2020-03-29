package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Hall;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface HallService {
    List<Hall> find(String hallNumber);
}
