package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Cinema;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CinemaRepository extends CrudRepository<Cinema, Long> {
    List<Cinema> findAll();

    List<Cinema> findAllByCinemaName(String cinemaName);

    Optional<Cinema> findById(Long id);

    Cinema save(Cinema cinema);

    void delete(Cinema cinema);

    void deleteById(Long id);
}
