package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.repository.SessionRepository;
import com.netcracker.cinema.backend.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SessionServiceImpl implements SessionService {
    @Autowired
    private SessionRepository sessionRepository;

    @Override
    public List<Session> findAll() {
        return sessionRepository.findAll();
    }
}
