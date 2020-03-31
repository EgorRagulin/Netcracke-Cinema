package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.Ticket;
import com.netcracker.cinema.fapi.model.User;

import java.util.List;

public interface TicketService {
    List<Ticket> findAllTicket();

    List<Ticket> findAllTicketByUser(User user);

    Ticket findTicketById(Long id);

    Ticket setTicket(Ticket ticket);

    void deleteTicket(Ticket ticket);

    void deleteTicketById(Long id);
}
