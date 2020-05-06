package com.netcracker.cinema.fapi.service;


import com.netcracker.cinema.fapi.DTO.FullDTO.FullTicketDTO;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.Ticket;

import java.util.List;

public interface TicketService {
    List<Ticket> findAll();

    Ticket findById(Long id);

    FullTicketDTO save(FullTicketDTO fullTicketDTO);

    void deleteById(Long id);

    FullTicketDTO findFullById(Long id);

    PageDTO<FullTicketDTO> findPage(int pageNumber, int pageSize);
}
