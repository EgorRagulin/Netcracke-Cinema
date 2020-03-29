package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.repository.UserRepository;
import com.netcracker.cinema.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> find(String firstName){
        return userRepository.findByFirstName(firstName);
    }

    @Override
    public List<User> findAll() { return userRepository.findAll(); }
}
