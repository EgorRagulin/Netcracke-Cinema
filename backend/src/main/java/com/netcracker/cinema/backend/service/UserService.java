package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {
    List<User> findAllUser();

    List<User> findAllUserByFirstName(String firstName);

    User findUserById(Long id);

    User setUser(User user);

    void deleteUser(User user);

    void deleteUserById(Long id);
}
