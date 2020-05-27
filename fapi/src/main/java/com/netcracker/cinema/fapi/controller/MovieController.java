package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.MovieViewModel;
import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.all.movie.genre.AllMovieGenreModel;
import com.netcracker.cinema.fapi.model.full.FullMovieViewModel;
import com.netcracker.cinema.fapi.DTO.PageDTO;
import com.netcracker.cinema.fapi.model.full.FullSessionViewModel;
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
    public FullMovieViewModel findMovieById(@RequestParam Long id) {
        return movieService.findById(id);
    }

    @PostMapping
    public FullMovieViewModel saveMovie(@RequestBody MovieViewModel Movie) {
        return movieService.save(Movie);
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

    @GetMapping(params = {"id"}, path = {"/full-sessions/"})
    public List<FullSessionViewModel> findMovieFullSessions(@RequestParam Long id) {
        return movieService.findFullSessionsByMovieId(id);
    }


    @GetMapping(path = {"/all-genres"})
    public AllMovieGenreModel getAllGenres() {
        return movieService.getAllGenres();
    }
}
