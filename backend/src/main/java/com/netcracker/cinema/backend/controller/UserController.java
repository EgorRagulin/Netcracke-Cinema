package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/{userName}", method = RequestMethod.GET)
    public List<User> getUserByName(@PathVariable(name = "userName") String userName) {
        return userService.find(userName);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<User> getUsers() {
        return userService.findAll();
    }
}
