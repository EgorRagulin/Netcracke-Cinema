package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.Movie;
import com.netcracker.cinema.fapi.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Movie> getAllMovie(){
        return movieService.findAll();
    }
}
