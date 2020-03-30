package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Session;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface SessionRepository extends CrudRepository<Session, Long> {
    List<Session> findAll();

    List<Session> findAllByDate(Date date);

    Optional<Session> findById(Long id);

    Session save(Session session);

    void delete(Session session);

    void deleteById(Long id);
}
