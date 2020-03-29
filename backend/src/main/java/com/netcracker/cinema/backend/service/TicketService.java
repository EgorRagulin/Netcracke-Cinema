package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Ticket;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface TicketService {
    List<Ticket> findAll();
}
