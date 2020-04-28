package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Session;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Component
public interface SessionService {
    List<Session> findAll();

    Optional<Session> findById(Long id);

    Session save(Session session);

    void deleteById(Long id);
}
