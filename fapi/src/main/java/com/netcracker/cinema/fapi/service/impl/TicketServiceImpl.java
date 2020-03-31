package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.Ticket;
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
    public List<Ticket> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Ticket[] ticketsResponse = restTemplate.getForObject(backendServerUrl + "/api/tickets/", Ticket[].class);
        return ticketsResponse == null ? Collections.emptyList() : Arrays.asList(ticketsResponse);
    }
}
