package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Ticket;
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

    @GetMapping
    public List<User> getAllUser() {
        return userService.findAll();
    }

    @GetMapping(params = {"id"})
    public User getUserById(@RequestParam Long id) {
        return userService.findById(id).get();
    }

    @GetMapping(params = {"id"}, path = {"/tickets/"})
    public List<Ticket> getTicketsByUserId(@RequestParam Long id) {
        return userService.findById(id).get().getTickets();
    }

    @PostMapping
    public User setUser(@RequestBody User user) {
        return userService.save(user);
    }

    @DeleteMapping(params = {"id"})
    public void deleteUserById(@RequestParam Long id) {
        userService.deleteById(id);
    }
}
