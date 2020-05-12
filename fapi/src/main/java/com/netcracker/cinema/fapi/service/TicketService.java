package com.netcracker.cinema.fapi.service;


import com.netcracker.cinema.fapi.model.TicketViewModel;
import com.netcracker.cinema.fapi.model.full.FullTicketViewModel;
import com.netcracker.cinema.fapi.DTO.PageDTO;

import java.util.List;

public interface TicketService {
    List<TicketViewModel> findAll();

    TicketViewModel findById(Long id);

    FullTicketViewModel save(FullTicketViewModel fullTicketViewModel);

    void deleteById(Long id);

    FullTicketViewModel findFullById(Long id);

    PageDTO<FullTicketViewModel> findPage(int pageNumber, int pageSize);
}
