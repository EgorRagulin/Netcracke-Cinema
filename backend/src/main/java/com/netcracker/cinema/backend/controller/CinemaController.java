package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Cinema;
import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cinemas")
public class CinemaController {
    @Autowired
    private CinemaService cinemaService;

    @GetMapping
    public List<Cinema> getAllCinemas() {
        return cinemaService.findAll();
    }

    @GetMapping(params = {"id"})
    public Cinema getCinemaById(@RequestParam Long id) {
        return cinemaService.findById(id).get();
    }

    @GetMapping(params = {"id"}, path = {"/halls/"})
    public List<Hall> getHallsByCinemaId(@RequestParam Long id) {
        return cinemaService.findById(id).get().getHalls();
    }

    @PostMapping
    public Cinema saveCinema(@RequestBody Cinema cinema) {
        return cinemaService.save(cinema);
    }

    @DeleteMapping(params = {"id"})
    public void deleteCinemaById(@RequestParam Long id) {
        cinemaService.deleteById(id);
    }
}
