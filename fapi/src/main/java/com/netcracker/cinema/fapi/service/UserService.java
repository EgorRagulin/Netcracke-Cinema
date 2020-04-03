package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.User;

import java.util.List;

public interface UserService {
    List<User> findAllUser();

    List<User> findAllUserByFirstName(String firstName);

    User findUserById(Long id);

    User setUser(User user);

    void deleteUserById(Long id);
}
