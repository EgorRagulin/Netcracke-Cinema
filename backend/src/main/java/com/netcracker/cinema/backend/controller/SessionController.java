package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api/sessions")
public class SessionController {
    @Autowired
    private SessionService sessionService;

    @GetMapping
    public List<Session> getSessions() {
        return sessionService.findAll();
    }


    @GetMapping(params = {"id"})
    public Session getSessionById(@RequestParam Long id) {
        return sessionService.findById(id).get();
    }

    @GetMapping(params = {"id"}, path = {"/tickets/"})
    public List<Ticket> getTicketsBySession(@RequestParam Long id) {
        return sessionService.findById(id).get().getTickets();
    }

    @PostMapping
    public Session saveSession(@RequestBody Session session) {
        return sessionService.save(session);
    }

    @DeleteMapping(params = {"id"})
    public void deleteSession(@RequestParam Long id) {
        sessionService.deleteById(id);
    }
}

