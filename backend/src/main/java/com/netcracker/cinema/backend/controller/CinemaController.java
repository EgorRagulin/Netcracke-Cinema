package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Cinema;
import com.netcracker.cinema.backend.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cinemas")
public class CinemaController {
    @Autowired
    private CinemaService cinemaService;

    @RequestMapping(value = "/{cinema}", method = RequestMethod.GET)
    public List<Cinema> getCinemaByCinemaName(@PathVariable(name = "cinema") String cinema) {
        return cinemaService.find(cinema);
    }
}
