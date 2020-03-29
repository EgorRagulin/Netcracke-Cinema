package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Session;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface SessionService {
    List<Session> findAll();
}
