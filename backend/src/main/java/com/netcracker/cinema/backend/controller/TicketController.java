package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Ticket> getAllCinema() {
        return ticketService.findAllTicket();
    }
    //Переделать запрос value = "/user"
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public List<Ticket> getCinemaByCinemaName(@RequestBody User user) {
        return ticketService.findAllTicketByUser(user);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Ticket getCinemaById(@PathVariable(name = "id") Long id) {
        return ticketService.findTicketById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Ticket setCinema(@RequestBody Ticket ticket) {
        return ticketService.setTicket(ticket);
    }
}
