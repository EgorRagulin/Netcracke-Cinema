package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.MovieViewModel;
import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.full.FullMovieViewModel;
import com.netcracker.cinema.fapi.DTO.PageDTO;
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
    public List<MovieViewModel> findAllMovies() {
        return movieService.findAll();
    }

    @GetMapping(params = {"id"})
    public MovieViewModel findMovieById(@RequestParam Long id) {
        return movieService.findById(id);
    }

    @PostMapping
    public MovieViewModel saveMovie(@RequestBody MovieViewModel movieViewModel) {
        return movieService.save(movieViewModel);
    }

    @DeleteMapping(params = {"id"})
    public void deleteMovieById(@RequestParam Long id) {
        movieService.deleteById(id);
    }


    @GetMapping(params = {"pageNumber", "pageSize"})
    public PageDTO<FullMovieViewModel> findMoviesPage(@RequestParam int pageNumber, @RequestParam int pageSize) {
        return movieService.findPage(pageNumber, pageSize);
    }

    @GetMapping(params = {"id"}, path = {"/sessions/"})
    public List<SessionViewModel> findMovieSessions(@RequestParam Long id) {
        return movieService.findSessionsByMovieId(id);
    }
}