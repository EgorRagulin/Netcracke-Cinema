package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Ticket;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface TicketService {
    List<Ticket> findAllTicket();

    Optional<Ticket> findTicketById(Long id);

    Ticket setTicket(Ticket ticket);

    void deleteTicketById(Long id);
}
