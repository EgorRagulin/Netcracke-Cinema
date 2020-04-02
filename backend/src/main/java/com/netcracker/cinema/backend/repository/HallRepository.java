package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Hall;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HallRepository extends CrudRepository<Hall, Long> {
    List<Hall> findAll();

    Optional<Hall> findById(Long id);

    Hall save(Hall hall);

    void deleteById(Long id);
}