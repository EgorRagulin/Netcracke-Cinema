package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.Cinema;
import com.netcracker.cinema.fapi.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cinemas")
public class CinemaController {
    @Autowired
    private CinemaService cinemaService;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Cinema> getAllUsers(){
        return cinemaService.findAll();
    }
}
