package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.model.TicketViewModel;
import com.netcracker.cinema.fapi.model.full.FullTicketViewModel;
import com.netcracker.cinema.fapi.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @GetMapping
    public List<TicketViewModel> findTickets() {
        return ticketService.findAll();
    }

    @GetMapping(params = {"id"})
    public TicketViewModel findTicketById(@RequestParam Long id) {
        return ticketService.findById(id);
    }

    @PostMapping
    public FullTicketViewModel saveTicket(@RequestBody FullTicketViewModel fullTicketViewModel) {
        return ticketService.save(fullTicketViewModel);
    }

    @DeleteMapping(params = {"id"})
    public void deleteTicketById(@RequestParam Long id) {
        ticketService.deleteById(id);
    }
}
