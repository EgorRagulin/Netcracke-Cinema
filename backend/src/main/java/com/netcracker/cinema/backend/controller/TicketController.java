package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets/")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @GetMapping
    public List<Ticket> getTickets() {
        return ticketService.findAll();
    }

    @GetMapping(params = {"id"})
    public Ticket getTicketById(@RequestParam Long id) {
        return ticketService.findById(id).get();
    }

    @PostMapping
    public Ticket saveTicket(@RequestBody Ticket ticket) {
        final Ticket savedTicket = ticketService.save(ticket);
        System.out.println("movie ticket!");
        return savedTicket;
    }

    @DeleteMapping(params = {"id"})
    public void deleteTicketById(@RequestParam Long id) {
        ticketService.deleteById(id);
    }
}
