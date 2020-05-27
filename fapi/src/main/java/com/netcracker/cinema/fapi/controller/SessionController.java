package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.TicketViewModel;
import com.netcracker.cinema.fapi.model.full.FullSessionViewModel;
import com.netcracker.cinema.fapi.model.full.FullTicketViewModel;
import com.netcracker.cinema.fapi.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sessions")
public class SessionController {
    @Autowired
    private SessionService sessionService;

    @GetMapping
    public List<SessionViewModel> findSessions() {
        return sessionService.findAll();
    }

    @GetMapping(params = {"id"})
    public SessionViewModel findSessionById(@RequestParam Long id) {
        return sessionService.findById(id);
    }

    @PostMapping
    public FullSessionViewModel saveSession(@RequestBody FullSessionViewModel fullSession) {
        return sessionService.save(fullSession);
    }

    @DeleteMapping(params = {"id"})
    public void deleteSession(@RequestParam Long id) {
        sessionService.deleteById(id);
    }

    @GetMapping(params = {"id"}, path = {"/full"})
    public FullSessionViewModel findFullSessionById(@RequestParam Long id) {
        return sessionService.findFullById(id);
    }

    @GetMapping(params = {"id"}, path = {"/tickets"})
    public List<TicketViewModel> findTicketsBySession(@RequestParam Long id) {
        return sessionService.findTicketsBySessionId(id);
    }

    @GetMapping(params = {"id"}, path = {"/fullTickets"})
    public List<FullTicketViewModel> findFullTicketsBySessionId(@RequestParam Long id) {
        return sessionService.findFullTicketsBySessionId(id);
    }
}
