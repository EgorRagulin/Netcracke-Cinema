package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.service.UserService;
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

    @RequestMapping(value = "/{first name}", method = RequestMethod.GET)
    public List<User> getUserByFirstName(@PathVariable(name = "first name") String firstName) {
        return userService.findAllUserByFirstName(firstName);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable(name = "id") Long id) {
        return userService.findUserById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public User setUser(@RequestBody User user) {
        return userService.setUser(user);
    }

    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    public void deleteUser(@RequestBody User user) {
        userService.deleteUser(user);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteUserById(@PathVariable(name = "id") Long id) {
        userService.deleteUserById(id);
    }
}
