package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.Ticket;
import com.netcracker.cinema.fapi.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Ticket> getAllTicket(){
        return ticketService.findAll();
    }
}
