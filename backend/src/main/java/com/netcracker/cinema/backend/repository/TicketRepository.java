package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketRepository extends CrudRepository<Ticket, Long> {
    List<Ticket> findAll();

    Page<Ticket> findAll(Pageable pageable);

    Optional<Ticket> findById(Long id);

    Ticket save(Ticket ticket);

    void deleteById(Long id);
}
