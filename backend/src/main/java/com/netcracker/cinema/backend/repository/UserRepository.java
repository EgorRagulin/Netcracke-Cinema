package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findByFirstName(String firstName);

    List<User> findAll();
}
