package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.Ticket;
import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.service.TicketService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {
    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<Ticket> findAllTicket() {
        RestTemplate restTemplate = new RestTemplate();
        Ticket[] ticketsResponse = restTemplate.getForObject(backendServerUrl + "/api/tickets/", Ticket[].class);
        return ticketsResponse == null ? Collections.emptyList() : Arrays.asList(ticketsResponse);
    }

    @Override
    public List<Ticket> findAllTicketByUser(User user) {
        return null;
    }

    @Override
    public Ticket findTicketById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/tickets/id=" + id, Ticket.class);
    }

    @Override
    public Ticket setTicket(Ticket ticket) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/tickets/", ticket, Ticket.class).getBody();
    }

    @Override
    public void deleteTicket(Ticket ticket) {

    }

    @Override
    public void deleteTicketById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/tickets/id=" + id);
    }
}
