package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.DTO.FullDTO.FullTicketDTO;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.Ticket;
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
    public List<Ticket> findTickets() {
        return ticketService.findAll();
    }

    @GetMapping(params = {"id"})
    public Ticket findTicketById(@RequestParam Long id) {
        return ticketService.findById(id);
    }

    @PostMapping
    public FullTicketDTO saveTicket(@RequestBody FullTicketDTO fullTicketDTO) {
        return ticketService.save(fullTicketDTO);
    }

    @DeleteMapping(params = {"id"})
    public void deleteTicketById(@RequestParam Long id) {
        ticketService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullTicketDTO findFullTicketById(@RequestParam Long id) {
        return ticketService.findFullById(id);
    }

    @GetMapping(params = {"pageNumber", "pageSize"})
    public PageDTO<FullTicketDTO> findTicketsPage(@RequestParam int pageNumber, @RequestParam int pageSize) {
        return ticketService.findPage(pageNumber, pageSize);
    }

}
