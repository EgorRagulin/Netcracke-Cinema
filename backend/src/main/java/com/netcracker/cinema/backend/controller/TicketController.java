package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.full.FullTicket;
import com.netcracker.cinema.backend.DTO.PageDTO;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.service.TicketService;
import com.netcracker.cinema.backend.sort.PagingSort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
        return ticketService.findById(id).get();
    }

    @PostMapping
    public FullTicket saveTicket(@RequestBody Ticket ticket) {
        Ticket savedTicket = ticketService.save(ticket);
        FullTicket savedFullTicket = new FullTicket(savedTicket);
        return savedFullTicket;
    }

    @DeleteMapping(params = {"id"})
    public void deleteTicketById(@RequestParam Long id) {
        ticketService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullTicket findFullTicketById(@RequestParam Long id) {
        Ticket ticket = ticketService.findById(id).get();
        FullTicket fullTicket = new FullTicket(ticket);
        return fullTicket;
    }

    @GetMapping(params = {"pageNumber", "pageSize"})
    public PageDTO<FullTicket> findPageOfTickets(@RequestParam int pageNumber, @RequestParam int pageSize) {
        String sortProperty = "session";
        PageDTO<Ticket> pageTickets = new PageDTO(getPage(pageNumber, pageSize, sortProperty));

        List<FullTicket> listOfFullTickets = new ArrayList<FullTicket>();
        pageTickets.getCollectionOfElements().forEach(ticket -> listOfFullTickets.add(new FullTicket(ticket)));

        PageDTO<FullTicket> pageFullTicket = new PageDTO(listOfFullTickets, pageTickets);
        return pageFullTicket;
    }

    private Page getPage(int pageNumber, int pageSize, String sortProperty) {
        return ticketService.findPage(
                // page 0 - pageNumber 1
                new PageRequest(pageNumber - 1, pageSize, PagingSort.getSortByProperty(sortProperty))
        );
    }
}
