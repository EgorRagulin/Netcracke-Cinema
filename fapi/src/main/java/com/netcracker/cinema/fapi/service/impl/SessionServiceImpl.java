package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.TicketViewModel;
import com.netcracker.cinema.fapi.model.full.FullSessionViewModel;
import com.netcracker.cinema.fapi.model.full.FullTicketViewModel;
import com.netcracker.cinema.fapi.service.SessionService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class SessionServiceImpl implements SessionService {
    private String rootPath = "http://localhost:8080/api/sessions";

    @Override
    public List<SessionViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        SessionViewModel[] sessionsResponse = restTemplate.getForObject(rootPath, SessionViewModel[].class);
        return sessionsResponse == null ? Collections.emptyList() : Arrays.asList(sessionsResponse);
    }

    @Override
    public SessionViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/?id=" + id, SessionViewModel.class);
    }

    @Override
    public SessionViewModel save(SessionViewModel sessionViewModel) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, sessionViewModel, SessionViewModel.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }

    @Override
    public FullSessionViewModel findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/full/?id=" + id, FullSessionViewModel.class);
    }

    @Override
    public List<TicketViewModel> findTicketsBySessionId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        TicketViewModel[] sessionsResponse = restTemplate.getForObject(rootPath + "/tickets/?id=" + id , TicketViewModel[].class);
        return sessionsResponse == null ? Collections.emptyList() : Arrays.asList(sessionsResponse);
    }

    @Override
    public List<FullTicketViewModel> findFullTicketsBySessionId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        FullTicketViewModel[] sessionsResponse = restTemplate.getForObject(rootPath + "/fullTickets/?id=" + id , FullTicketViewModel[].class);
        return sessionsResponse == null ? Collections.emptyList() : Arrays.asList(sessionsResponse);
    }
}
