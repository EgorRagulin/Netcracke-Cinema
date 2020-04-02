package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface UserService {
    List<User> findAllUser();

    List<User> findAllUserByFirstNameAndSecondName(String firstName, String secondName);

    Optional<User> findUserById(Long id);

    User setUser(User user);

    void deleteUserById(Long id);
}
