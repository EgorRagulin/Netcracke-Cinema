package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.full.FullSession;
import com.netcracker.cinema.backend.entity.full.FullTicket;
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
    public FullSession saveSession(@RequestBody Session session) {
        Session savedSession = sessionService.save(session);
        FullSession fullSession = new FullSession(savedSession);
        return fullSession;
    }

    @DeleteMapping(params = {"id"})
    public void deleteSession(@RequestParam Long id) {
        sessionService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullSession findFullSessionById(@RequestParam Long id) {
        Session session = sessionService.findById(id).get();
        FullSession fullSession = new FullSession(session);
        return fullSession;
    }

    @GetMapping(params = {"id"}, path = {"/tickets"})
    public List<Ticket> findTicketsBySession(@RequestParam Long id) {
        return sessionService.findById(id).get().getTickets();
    }

    @GetMapping(params = {"id"}, path = {"/fullTickets"})
    public List<FullTicket> findFullTicketsBySession(@RequestParam Long id) {
        List<Ticket> tickets = sessionService.findById(id).get().getTickets();
        List<FullTicket> fullTickets = new ArrayList<FullTicket>();
        tickets.forEach(ticket -> fullTickets.add(new FullTicket(ticket)));
        return fullTickets;
    }
}

