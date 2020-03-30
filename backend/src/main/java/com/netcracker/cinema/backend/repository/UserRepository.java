package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findAll();

    List<User> findAllByFirstName(String firstName);

    Optional<User> findById(Long Id);

    User save(User user);

    void delete(User user);

    void deleteById(Long id);
}
