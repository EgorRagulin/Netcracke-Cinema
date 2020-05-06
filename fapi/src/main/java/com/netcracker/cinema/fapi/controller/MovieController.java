package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullMovieDTO;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.Movie;
import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping
    public List<Movie> findAllMovies() {
        return movieService.findAll();
    }

    @GetMapping(params = {"id"})
    public Movie findMovieById(@RequestParam Long id) {
        return movieService.findById(id);
    }

    @PostMapping
    public Movie saveMovie(@RequestBody Movie movie) {
        return movieService.save(movie);
    }

    @DeleteMapping(params = {"id"})
    public void deleteMovieById(@RequestParam Long id) {
        movieService.deleteById(id);
    }


    @GetMapping(params = {"pageNumber", "pageSize"})
    public PageDTO<FullMovieDTO> findMoviesPage(@RequestParam int pageNumber, @RequestParam int pageSize) {
        return movieService.findPage(pageNumber, pageSize);
    }

    @GetMapping(params = {"id"}, path = {"/sessions/"})
    public List<Session> findMovieSessions(@RequestParam Long id) {
        return movieService.findSessionsByMovieId(id);
    }
}