package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Ticket> getAllCinema() {
        return ticketService.findAllTicket();
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Ticket getCinemaById(@PathVariable(name = "id") Long id) {
        return ticketService.findTicketById(id).get();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Ticket setCinema(@RequestBody Ticket ticket) {
        return ticketService.setTicket(ticket);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteTicketById(@PathVariable(name = "id") Long id) {
        ticketService.deleteTicketById(id);
    }
}
