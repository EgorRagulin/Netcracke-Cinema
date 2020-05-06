package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.DTO.FullDTO.FullMovieDTO;
import com.netcracker.cinema.backend.DTO.PageDTO;
import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.enums.MovieGenre;
import com.netcracker.cinema.backend.service.MovieService;
import com.netcracker.cinema.backend.sort.PagingSort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping()
    public List<FullMovieDTO> findALLMovie() {
        List<FullMovieDTO> movieDTOS = new ArrayList<FullMovieDTO>();
        movieService.findAll().forEach(movie -> movieDTOS.add(new FullMovieDTO(movie)));
        return movieDTOS;
    }

    @GetMapping(params = {"id"})
    public FullMovieDTO findMovieById(@RequestParam Long id) {
        Movie movie = movieService.findById(id).get();
        return new FullMovieDTO(movie);
    }

    @PostMapping
    public FullMovieDTO saveMovie(@RequestBody FullMovieDTO fullMovieDTO) {
        Movie savedMovie = movieService.save(fullMovieDTO.transformToMovie());
        return new FullMovieDTO(savedMovie);
    }

    @DeleteMapping(params = {"id"})
    public void deleteMovieById(@RequestParam Long id) {
        movieService.deleteById(id);
    }

    @GetMapping(params = {"pageNumber", "pageSize"})
    public PageDTO<FullMovieDTO> findPage(@RequestParam int pageNumber, @RequestParam int pageSize) {
        String sortProperty = "id";
        PageDTO<Movie> moviesPage = new PageDTO(getPage(pageNumber, pageSize, sortProperty));

        List<FullMovieDTO> movieDTOS = new ArrayList<FullMovieDTO>();
        moviesPage.getCollectionOfElements().forEach(movie -> movieDTOS.add(new FullMovieDTO(movie)));

        return new PageDTO(movieDTOS, moviesPage);
    }

    @GetMapping(params = {"id"}, path = {"/sessions/"})
    public List<Session> findMovieSessions(@RequestParam Long id) {
        return movieService.findById(id).get().getSessions();
    }

    private Page getPage(int pageNumber, int pageSize, String sortProperty) {
        return movieService.findPage(
                // page 0 - pageNumber 1
                new PageRequest(pageNumber - 1, pageSize, PagingSort.getSortByProperty(sortProperty))
        );
    }
//    @PostMapping
//    public Movie saveMovie(@RequestParam("picture") MultipartFile file,
//                           @RequestParam("title") String title,
//                           @RequestParam("description") String description,
//                           @RequestParam("ageLimit") String ageLimit,
//                           @RequestParam("duration") String duration,
//                           @RequestParam("genres") String genres
//                           ) throws IOException {
//        Movie movie = new Movie();
//        movie.setPicture(file.getBytes());
//        movie.setTitle(title);
//        movie.setDescription(description);
//        movie.setAgeLimit(Integer.parseInt(ageLimit));
//        movie.setDuration(Time.valueOf(duration));
//        movie.setGenres(genres);
//        final Movie savedMovie = movieService.save(movie);
//        System.out.println("movie saved!");
//        return savedMovie;
//    }
}
