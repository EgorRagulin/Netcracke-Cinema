package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.full.FullSessionViewModel;
import com.netcracker.cinema.fapi.model.full.FullTicketViewModel;
import com.netcracker.cinema.fapi.model.TicketViewModel;

import java.util.List;

public interface SessionService {
    List<SessionViewModel> findAll();

    SessionViewModel findById(Long id);

    FullSessionViewModel save(FullSessionViewModel fullSession);

    void deleteById(Long id);

    FullSessionViewModel findFullById(Long id);

    List<TicketViewModel> findTicketsBySessionId(Long id);

    List<FullTicketViewModel> findFullTicketsBySessionId(Long id);
}
