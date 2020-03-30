package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.repository.SessionRepository;
import com.netcracker.cinema.backend.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

@Component
public class SessionServiceImpl implements SessionService {
    @Autowired
    private SessionRepository sessionRepository;

    @Override
    public List<Session> findAllSession() {
        return sessionRepository.findAll();
    }

    @Override
    public List<Session> findSessionByDate(Date date) {
        return sessionRepository.findAllByDate(date);
    }

    @Override
    public Session findSessionById(Long id) {
        return sessionRepository.findById(id).get();
    }

    @Override
    public Session setSession(Session session) {
        return sessionRepository.save(session);
    }
}
