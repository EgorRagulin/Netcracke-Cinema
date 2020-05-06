package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.DTO.FullDTO.FullUserDTO;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;
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
    public List<User> findAllUser() {
        return userService.findAll();
    }

    @GetMapping(params = {"id"})
    public User findUserById(@RequestParam Long id) {
        return userService.findById(id).get();
    }

    @PostMapping
    public FullUserDTO saveUser(@RequestBody User user) {
        User savedUser = userService.save(user);
        FullUserDTO fullUserDTO = new FullUserDTO(savedUser);
        return fullUserDTO;
    }

    @DeleteMapping(params = {"id"})
    public void deleteUserById(@RequestParam Long id) {
        userService.deleteById(id);
    }

    @GetMapping(params = {"id"}, path = {"/full"})
    public FullUserDTO findFullUserById(@RequestParam Long id) {
        User user = userService.findById(id).get();
        FullUserDTO fullUserDTO = new FullUserDTO(user);
        return fullUserDTO;
    }

    @GetMapping(params = {"id"}, path = {"/wallet"})
    public Wallet findWalletByUserId(@RequestParam Long id) {
        return userService.findById(id).get().getWallet();
    }

    @GetMapping(params = {"id"}, path = {"/tickets/"})
    public List<Ticket> findTicketsByUserId(@RequestParam Long id) {
        return userService.findById(id).get().getTickets();
    }
}
