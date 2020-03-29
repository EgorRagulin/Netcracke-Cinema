package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {
    List<User> find(String userName);

    List<User> findAll();
}
