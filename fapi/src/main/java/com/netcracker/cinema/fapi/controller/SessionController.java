package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullSessionDTO;
import com.netcracker.cinema.fapi.DTO.FullDTO.FullTicketDTO;
import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.model.Ticket;
import com.netcracker.cinema.fapi.service.SessionService;
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
        return sessionService.findById(id);
    }

    @PostMapping
    public Session saveSession(@RequestBody Session session) {
        return sessionService.save(session);
    }

    @DeleteMapping(params = {"id"})
    public void deleteSession(@RequestParam Long id) {
        sessionService.deleteById(id);
    }

    @GetMapping(params = {"id"}, path = {"/full"})
    public FullSessionDTO findFullSessionById(@RequestParam Long id) {
        return sessionService.findFullById(id);
    }

    @GetMapping(params = {"id"}, path = {"/tickets"})
    public List<Ticket> findTicketsBySession(@RequestParam Long id) {
        return sessionService.findTicketsBySessionId(id);
    }

    @GetMapping(params = {"id"}, path = {"/fullTickets"})
    public List<FullTicketDTO> findFullTicketsBySessionId(@RequestParam Long id) {
        return sessionService.findFullTicketsBySessionId(id);
    }
}
