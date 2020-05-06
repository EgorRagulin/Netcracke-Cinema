package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullCinemaDTO;
import com.netcracker.cinema.fapi.model.Cinema;
import com.netcracker.cinema.fapi.model.Hall;
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
    public List<Cinema> findAllCinemas() {
        return cinemaService.findAll();
    }

    @GetMapping(params = {"id"})
    public Cinema findCinemaById(@RequestParam Long id) {
        return cinemaService.findById(id);
    }

    @PostMapping
    public Cinema saveCinema(@RequestBody Cinema cinema) {
        return cinemaService.save(cinema);
    }

    @DeleteMapping(params = {"id"})
    public void deleteCinemaById(@RequestParam Long id) {
        cinemaService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullCinemaDTO findFullCinemaById(@RequestParam Long id) {
        return cinemaService.findFullById(id);
    }

    @GetMapping(params = {"id"}, path = {"/halls"})
    public List<Hall> findHallsByCinemaId(@RequestParam Long id) {
        return cinemaService.findHallsByCinemaId(id);
    }
}
