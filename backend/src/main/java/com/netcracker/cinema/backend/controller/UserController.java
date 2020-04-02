package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<User> getAllUser() {
        return userService.findAllUser();
    }

    @RequestMapping(value = "/{firstName}+{secondName}", method = RequestMethod.GET)
    public List<User> getUserByFirstNameAndSecondName(@PathVariable(name = "firstName") String firstName, @PathVariable(name = "secondName") String secondName) {
        return userService.findAllUserByFirstNameAndSecondName(firstName, secondName);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable(name = "id") Long id) {
        return userService.findUserById(id).get();
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public User setUser(@RequestBody User user) {
        return userService.setUser(user);
    }


    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteUserById(@PathVariable(name = "id") Long id) {
        userService.deleteUserById(id);
    }
}
