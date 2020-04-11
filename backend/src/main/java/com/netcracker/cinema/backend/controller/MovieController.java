package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.DTO.MyPaging;
import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies/")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping(params = {"pageNumber", "pageSize"})
    public List<Movie> getAllMovie(@RequestParam int pageNumber, @RequestParam int pageSize) {
        Sort sort = new Sort(new Sort.Order(Sort.Direction.ASC, "title"));
        return movieService.findAllMovie(new PageRequest(pageNumber, pageSize, sort)).getContent();
    }

    @GetMapping(params = {"pageSize"})
    public MyPaging getAllMovie(@RequestParam int pageSize) {
        MyPaging myPaging = new MyPaging(movieService.findAllMovie(new PageRequest(0, pageSize)).getTotalPages());
        return myPaging;
    }

    @GetMapping(params = {"id"})
    public Movie getMovieById(@RequestParam Long id) {
        return movieService.findMovieById(id).get();
    }






    @RequestMapping(value = "/{title}", method = RequestMethod.GET)
    public List<Movie>  getMovieByTitle(@PathVariable(name = "title") String title) {
        return movieService.findMovieByTitle(title);
    }


    @RequestMapping(method = RequestMethod.POST)
    public Movie setMovie(@RequestBody Movie movie) {
        return movieService.setMovie(movie);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteMovieById(@PathVariable(name = "id") Long id) {
        movieService.deleteMovieById(id);
    }
}
