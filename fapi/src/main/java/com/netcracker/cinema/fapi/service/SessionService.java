package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullSessionDTO;
import com.netcracker.cinema.fapi.DTO.FullDTO.FullTicketDTO;
import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.model.Ticket;

import java.util.List;

public interface SessionService {
    List<Session> findAll();

    Session findById(Long id);

    Session save(Session session);

    void deleteById(Long id);

    FullSessionDTO findFullById(Long id);

    List<Ticket> findTicketsBySessionId(Long id);

    List<FullTicketDTO> findFullTicketsBySessionId(Long id);
}
