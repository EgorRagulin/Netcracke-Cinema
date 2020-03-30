package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Session;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

@Component
public interface SessionService {
    List<Session> findAllSession();

    List<Session> findSessionByDate(Date date);

    Session findSessionById(Long id);

    Session setSession(Session session);
}
