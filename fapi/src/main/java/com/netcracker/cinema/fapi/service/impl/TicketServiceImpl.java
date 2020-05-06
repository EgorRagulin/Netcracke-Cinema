package com.netcracker.cinema.fapi.service.impl;


import com.netcracker.cinema.fapi.DTO.FullDTO.FullTicketDTO;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.Ticket;
import com.netcracker.cinema.fapi.service.TicketService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {
    private String backendServerUrl = "http://localhost:8080/api/tickets";

    @Override
    public List<Ticket> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Ticket[] ticketsResponse = restTemplate.getForObject(backendServerUrl, Ticket[].class);
        return ticketsResponse == null ? Collections.emptyList() : Arrays.asList(ticketsResponse);
    }

    @Override
    public Ticket findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/?id=" + id, Ticket.class);
    }

    @Override
    public FullTicketDTO save(FullTicketDTO fullTicketDTO) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl, fullTicketDTO, FullTicketDTO.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/?id=" + id);
    }

    @Override
    public FullTicketDTO findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/full/?id=" + id, FullTicketDTO.class);
    }

    @Override
    public PageDTO<FullTicketDTO> findPage(int pageNumber, int pageSize) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/?pageNumber=" + pageNumber + "&pageSize=" + pageSize, PageDTO.class);

    }
}
