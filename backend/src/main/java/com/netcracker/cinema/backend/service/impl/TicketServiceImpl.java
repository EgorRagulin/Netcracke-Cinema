package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.repository.TicketRepository;
import com.netcracker.cinema.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class TicketServiceImpl implements TicketService {
    @Autowired
    private TicketRepository ticketRepository;


    @Override
    public List<Ticket> findAllTicket() {
        return ticketRepository.findAll();
    }

    @Override
    public Optional<Ticket> findTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    @Override
    public Ticket setTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public void deleteTicketById(Long id) {
        ticketRepository.deleteById(id);
    }
}
