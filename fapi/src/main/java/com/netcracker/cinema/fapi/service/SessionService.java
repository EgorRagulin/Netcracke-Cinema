package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.Session;

import java.sql.Date;
import java.util.List;

public interface SessionService {
    List<Session> findAllSession();

    List<Session> findSessionByDate(Date date);

    Session findSessionById(Long id);

    Session setSession(Session session);

    void deleteSessionById(Long id);
}
