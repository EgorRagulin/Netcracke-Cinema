package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Cinema;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CinemaRepository extends CrudRepository<Cinema, Long> {
    List<Cinema> findByCinemaName(String cinemaName);
}
