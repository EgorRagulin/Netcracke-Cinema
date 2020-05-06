package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.DTO.FullDTO.FullUserDTO;
import com.netcracker.cinema.fapi.model.Ticket;
import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.model.Wallet;
import com.netcracker.cinema.fapi.service.UserService;
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
        return userService.findById(id);
    }

    @PostMapping
    public FullUserDTO saveUser(@RequestBody FullUserDTO fullUserDTO) {
        return userService.save(fullUserDTO);
    }

    @DeleteMapping(params = {"id"})
    public void deleteUserById(@RequestParam Long id) {
        userService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullUserDTO findFullUserById(@RequestParam Long id) {
        return userService.findFullById(id);
    }

    @GetMapping(params = {"id"}, path = {"/wallet"})
    public Wallet findWalletById(@RequestParam Long id) {
        return userService.findWalletByUserId(id);
    }

    @GetMapping(params = {"id"}, path = {"/tickets"})
    public List<Ticket> findTicketsByUserId(@RequestParam Long id) {
        return userService.findTicketsByUserId(id);
    }
}
