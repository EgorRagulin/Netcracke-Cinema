package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.full.FullMovie;
import com.netcracker.cinema.backend.DTO.PageDTO;
import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.enums.MovieGenre;
import com.netcracker.cinema.backend.models.all.movie.genres.AllMovieGenreModel;
import com.netcracker.cinema.backend.service.MovieService;
import com.netcracker.cinema.backend.sort.PagingSort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping()
    public List<FullMovie> findALLMovie() {
        List<FullMovie> movieDTOS = new ArrayList<FullMovie>();
        movieService.findAll().forEach(movie -> movieDTOS.add(new FullMovie(movie)));
        return movieDTOS;
    }

    @GetMapping(params = {"id"})
    public FullMovie findMovieById(@RequestParam Long id) {
        Movie movie = movieService.findById(id).get();
        return new FullMovie(movie);
    }

    @PostMapping
    public FullMovie saveMovie(@RequestBody FullMovie fullMovie) {
        Movie savedMovie = movieService.save(fullMovie.transformToMovie());
        return new FullMovie(savedMovie);
    }

    @DeleteMapping(params = {"id"})
    public void deleteMovieById(@RequestParam Long id) {
        movieService.deleteById(id);
    }

    @GetMapping(params = {"pageNumber", "pageSize"})
    public PageDTO<FullMovie> findPage(@RequestParam int pageNumber, @RequestParam int pageSize) {
        String sortProperty = "id";
        PageDTO<Movie> moviesPage = new PageDTO(getPage(pageNumber, pageSize, sortProperty));

        List<FullMovie> movieDTOS = new ArrayList<FullMovie>();
        moviesPage.getCollectionOfElements().forEach(movie -> movieDTOS.add(new FullMovie(movie)));

        return new PageDTO(movieDTOS, moviesPage);
    }

    @GetMapping(params = {"id"}, path = {"/sessions/"})
    public List<Session> findMovieSessions(@RequestParam Long id) {
        return movieService.findById(id).get().getSessions();
    }

    @GetMapping(path = {"/all-genres"})
    public AllMovieGenreModel getAllMovieGenres() {
        return MovieGenre.getAllGenres();
    }

    private Page getPage(int pageNumber, int pageSize, String sortProperty) {
        return movieService.findPage(
                // page 0 - pageNumber 1
                new PageRequest(pageNumber - 1, pageSize, PagingSort.getSortByProperty(sortProperty))
        );
    }
}
