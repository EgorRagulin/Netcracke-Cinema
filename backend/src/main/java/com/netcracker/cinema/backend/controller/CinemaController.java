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

    @RequestMapping(method = RequestMethod.GET)
    public List<Cinema> getAllCinema() {
        return cinemaService.findAllCinema();
    }

    @RequestMapping(value = "/{name}", method = RequestMethod.GET)
    public Cinema getCinemaByCinemaName(@PathVariable(name = "name") String cinemaName) {
        return cinemaService.findCinemaByCinemaName(cinemaName).get();
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Cinema getCinemaById(@PathVariable(name = "id") Long id) {
        return cinemaService.findCinemaById(id).get();
    }

    @RequestMapping(value = "/id={id}/halls", method = RequestMethod.GET)
    public List<Hall> getHallsForCinemaById(@PathVariable(name = "id") Long id) {
        return cinemaService.findCinemaById(id).get().getHalls();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Cinema setCinema(@RequestBody Cinema cinema) {

        return cinemaService.setCinema(cinema);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteCinemaById(@PathVariable(name = "id") Long id) {
        cinemaService.deleteCinemaById(id);
    }
}
