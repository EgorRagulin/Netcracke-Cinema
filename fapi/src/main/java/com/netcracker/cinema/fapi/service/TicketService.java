package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.Ticket;

import java.util.List;

public interface TicketService {
    List<Ticket> findAll();
}
