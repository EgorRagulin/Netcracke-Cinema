package com.netcracker.cinema.fapi.service.impl;


import com.netcracker.cinema.fapi.model.TicketViewModel;
import com.netcracker.cinema.fapi.model.full.FullTicketViewModel;
import com.netcracker.cinema.fapi.DTO.PageDTO;
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
    public List<TicketViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        TicketViewModel[] ticketsResponse = restTemplate.getForObject(backendServerUrl, TicketViewModel[].class);
        return ticketsResponse == null ? Collections.emptyList() : Arrays.asList(ticketsResponse);
    }

    @Override
    public TicketViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/?id=" + id, TicketViewModel.class);
    }

    @Override
    public FullTicketViewModel save(FullTicketViewModel fullTicketViewModel) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl, fullTicketViewModel, FullTicketViewModel.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/?id=" + id);
    }

    @Override
    public FullTicketViewModel findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/full/?id=" + id, FullTicketViewModel.class);
    }

    @Override
    public PageDTO<FullTicketViewModel> findPage(int pageNumber, int pageSize) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/?pageNumber=" + pageNumber + "&pageSize=" + pageSize, PageDTO.class);

    }
}
