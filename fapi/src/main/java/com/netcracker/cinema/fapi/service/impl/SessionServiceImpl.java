package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.service.SessionService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.sql.Date;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class SessionServiceImpl implements SessionService {
    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<Session> findAllSession() {
        RestTemplate restTemplate = new RestTemplate();
        Session[] sessionsResponse = restTemplate.getForObject(backendServerUrl + "/api/sessions/", Session[].class);
        return sessionsResponse == null ? Collections.emptyList() : Arrays.asList(sessionsResponse);
    }

    @Override
    public List<Session> findSessionByDate(Date date) {
        RestTemplate restTemplate = new RestTemplate();
        Session[] sessionsResponse = restTemplate.getForObject(backendServerUrl + "/api/sessions/" + date, Session[].class);
        return sessionsResponse == null ? Collections.emptyList() : Arrays.asList(sessionsResponse);
    }

    @Override
    public Session findSessionById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/sessions/id=" + id, Session.class);
    }

    @Override
    public Session setSession(Session session) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/sessions/", session, Session.class).getBody();
    }

    @Override
    public void deleteSessionById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/sessions/id=" + id);
    }
}
