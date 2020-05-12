package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.CinemaViewModel;
import com.netcracker.cinema.fapi.model.HallViewModel;
import com.netcracker.cinema.fapi.model.full.FullCinemaViewModel;

import java.util.List;

public interface CinemaService {
    List<CinemaViewModel> findAll();

    CinemaViewModel findById(Long id);

    CinemaViewModel save(CinemaViewModel cinemaViewModel);

    void deleteById(Long id);

    FullCinemaViewModel findFullById(Long id);

    List<HallViewModel> findHallsByCinemaId(Long id);
}
