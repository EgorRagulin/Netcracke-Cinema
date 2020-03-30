package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Movie> getAllMovie() {
        return movieService.findAllMovie();
    }

    @RequestMapping(value = "/{title}", method = RequestMethod.GET)
    public Movie getMovieByTitle(@PathVariable(name = "title") String title) {
        return movieService.findMovieByTitle(title);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Movie getMovieById(@PathVariable(name = "id") Long id) {
        return movieService.findMovieById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Movie setMovie(@RequestBody Movie movie) {
        return movieService.setMovie(movie);
    }
}
