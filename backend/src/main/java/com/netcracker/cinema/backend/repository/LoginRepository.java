package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Login;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends CrudRepository<Login, Long> {
    Login findByUsername(String username);
}
