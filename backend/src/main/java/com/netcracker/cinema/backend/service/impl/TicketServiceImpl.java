package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.repository.TicketRepository;
import com.netcracker.cinema.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class TicketServiceImpl implements TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    @Override
    public Page<Ticket> findPage(Pageable pageable) {
        return ticketRepository.findAll(pageable);
    }

    @Override
    public Optional<Ticket> findById(Long id) {
        return ticketRepository.findById(id);
    }

    @Override
    public Ticket save(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public void deleteById(Long id) {
        ticketRepository.deleteById(id);
    }
}
