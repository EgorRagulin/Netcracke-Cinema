package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<User> getAllUsers(){
        return userService.findAll();
    }
}
