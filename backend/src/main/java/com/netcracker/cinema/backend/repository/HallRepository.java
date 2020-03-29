package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Hall;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HallRepository extends CrudRepository<Hall, Long> {
    List<Hall> findByHallNumber(int hallNumber);
}