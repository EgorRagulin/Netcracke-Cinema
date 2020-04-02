package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.repository.UserRepository;
import com.netcracker.cinema.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public List<User> findAllUser() {
        return userRepository.findAll();
    }

    @Override
    public List<User> findAllUserByFirstNameAndSecondName(String firstName, String secondName) {
        return userRepository.findAllByFirstNameAndSecondName(firstName, secondName);
    }

    @Override
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User setUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
