package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.HallViewModel;
import com.netcracker.cinema.fapi.model.full.FullHallViewModel;
import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.full.FullSessionViewModel;

import java.util.List;

public interface HallService {
    List<HallViewModel> findAll();

    HallViewModel findById(Long id);

    FullHallViewModel save(FullHallViewModel fullHallViewModel);

    void deleteById(Long id);

    FullHallViewModel findFullById(Long id);

    List<FullSessionViewModel> findFullSessionsByHallId(Long id);
}
