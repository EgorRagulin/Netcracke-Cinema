package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.repository.TicketRepository;
import com.netcracker.cinema.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TicketServiceImpl implements TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }
}
