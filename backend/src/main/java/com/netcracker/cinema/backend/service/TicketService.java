package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface TicketService {
    List<Ticket> findAllTicket();

    List<Ticket> findAllTicketByUser(User user);

    Ticket findTicketById(Long id);

    Ticket setTicket(Ticket ticket);
}
