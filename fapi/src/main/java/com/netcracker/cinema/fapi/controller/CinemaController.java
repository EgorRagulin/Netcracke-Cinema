package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.CinemaViewModel;
import com.netcracker.cinema.fapi.model.full.FullCinemaViewModel;
import com.netcracker.cinema.fapi.model.HallViewModel;
import com.netcracker.cinema.fapi.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cinemas")
public class CinemaController {
    @Autowired
    private CinemaService cinemaService;

    @GetMapping
    public List<CinemaViewModel> findAllCinemas() {
        return cinemaService.findAll();
    }

    @GetMapping(params = {"id"})
    public CinemaViewModel findCinemaById(@RequestParam Long id) {
        return cinemaService.findById(id);
    }

    @PostMapping
    public CinemaViewModel saveCinema(@RequestBody CinemaViewModel cinemaViewModel) {
        return cinemaService.save(cinemaViewModel);
    }

    @DeleteMapping(params = {"id"})
    public void deleteCinemaById(@RequestParam Long id) {
        cinemaService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullCinemaViewModel findFullCinemaById(@RequestParam Long id) {
        return cinemaService.findFullById(id);
    }

    @GetMapping(params = {"id"}, path = {"/halls"})
    public List<HallViewModel> findHallsByCinemaId(@RequestParam Long id) {
        return cinemaService.findHallsByCinemaId(id);
    }
}
