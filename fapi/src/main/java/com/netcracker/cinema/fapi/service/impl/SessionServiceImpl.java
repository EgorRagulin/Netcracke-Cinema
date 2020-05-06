package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullSessionDTO;
import com.netcracker.cinema.fapi.DTO.FullDTO.FullTicketDTO;
import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.model.Ticket;
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
    private String rootPath = "http://localhost:8080/api/sessions";

    @Override
    public List<Session> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Session[] sessionsResponse = restTemplate.getForObject(rootPath, Session[].class);
        return sessionsResponse == null ? Collections.emptyList() : Arrays.asList(sessionsResponse);
    }

    @Override
    public Session findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/?id=" + id, Session.class);
    }

    @Override
    public Session save(Session session) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, session, Session.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }

    @Override
    public FullSessionDTO findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/full/?id=" + id, FullSessionDTO.class);
    }

    @Override
    public List<Ticket> findTicketsBySessionId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        Ticket[] sessionsResponse = restTemplate.getForObject(rootPath + "/tickets/?id=" + id , Ticket[].class);
        return sessionsResponse == null ? Collections.emptyList() : Arrays.asList(sessionsResponse);
    }

    @Override
    public List<FullTicketDTO> findFullTicketsBySessionId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        FullTicketDTO[] sessionsResponse = restTemplate.getForObject(rootPath + "/fullTickets/?id=" + id , FullTicketDTO[].class);
        return sessionsResponse == null ? Collections.emptyList() : Arrays.asList(sessionsResponse);
    }
}
