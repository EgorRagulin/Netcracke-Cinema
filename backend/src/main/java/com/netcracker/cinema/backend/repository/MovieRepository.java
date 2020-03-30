package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {
    List<Movie> findAll();

    Movie findByTitle(String title);

    Optional<Movie> findById(Long id);

    Movie save(Movie movie);

    void delete(Movie movie);
}
