package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.entity.User;
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
    public List<Ticket> findAllTicket() {
        return ticketRepository.findAll();
    }

    @Override
    public List<Ticket> findAllTicketByUser(User user) {
        return ticketRepository.findAllByUser(user);
    }

    @Override
    public Ticket findTicketById(Long id) {
        return ticketRepository.findById(id).get();
    }

    @Override
    public Ticket setTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public void deleteTicket(Ticket ticket) {
        ticketRepository.delete(ticket);
    }

    @Override
    public void deleteTicketById(Long id) {
        ticketRepository.deleteById(id);
    }
}
