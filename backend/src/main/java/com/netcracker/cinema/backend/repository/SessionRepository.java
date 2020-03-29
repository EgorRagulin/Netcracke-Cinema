package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Session;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SessionRepository extends CrudRepository<Session, Long> {
    List<Session> findAll();
}
