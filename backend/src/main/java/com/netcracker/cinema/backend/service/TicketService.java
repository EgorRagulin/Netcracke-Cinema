package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.entity.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface TicketService {
    List<Ticket> findAll();

    Page<Ticket> findPage(Pageable pageable);

    Optional<Ticket> findById(Long id);

    Ticket save(Ticket ticket);

    void deleteById(Long id);
}
