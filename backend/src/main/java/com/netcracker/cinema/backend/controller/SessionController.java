package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.DTO.FullDTO.FullSessionDTO;
import com.netcracker.cinema.backend.DTO.FullDTO.FullTicketDTO;
import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/sessions")
public class SessionController {
    @Autowired
    private SessionService sessionService;

    @GetMapping
    public List<Session> findSessions() {
        return sessionService.findAll();
    }

    @GetMapping(params = {"id"})
    public Session findSessionById(@RequestParam Long id) {
        return sessionService.findById(id).get();
    }

    @PostMapping
    public FullSessionDTO saveSession(@RequestBody Session session) {
        Session savedSession = sessionService.save(session);
        FullSessionDTO fullSessionDTO = new FullSessionDTO(savedSession);
        return fullSessionDTO;
    }

    @DeleteMapping(params = {"id"})
    public void deleteSession(@RequestParam Long id) {
        sessionService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullSessionDTO findFullSessionById(@RequestParam Long id) {
        Session session = sessionService.findById(id).get();
        FullSessionDTO fullSessionDTO = new FullSessionDTO(session);
        return fullSessionDTO;
    }

    @GetMapping(params = {"id"}, path = {"/tickets"})
    public List<Ticket> findTicketsBySession(@RequestParam Long id) {
        return sessionService.findById(id).get().getTickets();
    }

    @GetMapping(params = {"id"}, path = {"/fullTickets"})
    public List<FullTicketDTO> findFullTicketsBySession(@RequestParam Long id) {
        List<Ticket> tickets = sessionService.findById(id).get().getTickets();
        List<FullTicketDTO> fullTicketDTOS = new ArrayList<FullTicketDTO>();
        tickets.forEach(ticket -> fullTicketDTOS.add(new FullTicketDTO(ticket)));
        return fullTicketDTOS;
    }
}

