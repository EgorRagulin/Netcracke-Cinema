package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.DTO.TotalPages;
import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.service.MovieService;
import com.netcracker.cinema.backend.sort.MySort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Time;
import java.util.List;

@RestController
@RequestMapping("/api/movies/")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping(params = {"pageNumber", "pageSize"})
    public List<Movie> getMoviesPage(@RequestParam int pageNumber, @RequestParam int pageSize) {
        String sortProperty = "id";
        return getPage(pageNumber, pageSize, sortProperty).getContent();
    }

    @GetMapping(params = {"pageSize"})
    public TotalPages getTotalPages(@RequestParam int pageSize) {
        return new TotalPages(getPage(pageSize).getTotalPages());
    }

    @GetMapping(params = {"id"})
    public Movie getMovieById(@RequestParam Long id) {
        return movieService.findById(id).get();
    }

    @GetMapping(params = {"movieId"}, path = {"movieSession/"})
    public List<Session> getMovieSessions(@RequestParam Long movieId) {
        return movieService.findById(movieId).get().getSessions();
    }

    @PostMapping
    public Movie saveMovie(@RequestParam("picture") MultipartFile file,
                           @RequestParam("title") String title,
                           @RequestParam("description") String description,
                           @RequestParam("ageLimit") String ageLimit,
                           @RequestParam("duration") String duration,
                           @RequestParam("genres") String genres
                           ) throws IOException {
        Movie movie = new Movie();
        movie.setPicture(file.getBytes());
        movie.setTitle(title);
        movie.setDescription(description);
        movie.setAgeLimit(Integer.parseInt(ageLimit));
        movie.setDuration(Time.valueOf(duration));
        movie.setGenres(genres);
        final Movie savedMovie = movieService.save(movie);
        System.out.println("movie saved!");
        return savedMovie;
    }

    @DeleteMapping(params = {"id"})
    public void deleteMovieById(@RequestParam Long id) {
        movieService.deleteById(id);
    }

    private Page getPage(int pageNumber, int pageSize, String sortProperty) {
        return movieService.findPage(new PageRequest(pageNumber, pageSize, MySort.getSortByProperty(sortProperty)));
    }

    private Page getPage(int pageSize) {
        return movieService.findPage(new PageRequest(0, pageSize));
    }
}
