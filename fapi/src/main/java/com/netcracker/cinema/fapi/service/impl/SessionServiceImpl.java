package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.service.SessionService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class SessionServiceImpl implements SessionService {
    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<Session> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Session[] sessionsResponse = restTemplate.getForObject(backendServerUrl + "/api/sessions/", Session[].class);
        return sessionsResponse == null ? Collections.emptyList() : Arrays.asList(sessionsResponse);
    }
}
