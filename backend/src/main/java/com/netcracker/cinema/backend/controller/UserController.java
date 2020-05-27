package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.DTO.CompleteTicketDTO;
import com.netcracker.cinema.backend.entity.full.FullUser;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;
import com.netcracker.cinema.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    public FullUser saveUser(@RequestBody User user) {
        User savedUser = userService.save(user);
        FullUser fullUser = new FullUser(savedUser);
        return fullUser;
    }

    @DeleteMapping(params = {"id"})
    public void deleteUserById(@RequestParam Long id) {
        userService.deleteById(id);
    }

    @GetMapping(params = {"id"}, path = {"/full"})
    public FullUser findFullUserById(@RequestParam Long id) {
        User user = userService.findById(id).get();
        FullUser fullUser = new FullUser(user);
        return fullUser;
    }

    @GetMapping(params = {"id"}, path = {"/wallet"})
    public Wallet findWalletByUserId(@RequestParam Long id) {
        return userService.findById(id).get().getWallet();
    }

    @GetMapping(params = {"userId"}, path = {"/complete-tickets/"})
    public List<CompleteTicketDTO> findCompleteTicketsByUserId(@RequestParam Long userId) {
        List<CompleteTicketDTO> completeTickets = new ArrayList<CompleteTicketDTO>();
        List<Ticket> ticketsByUserId = userService.findById(userId).get().getTickets();
        ticketsByUserId.forEach(ticket -> completeTickets.add(new CompleteTicketDTO(ticket)));
        return completeTickets;
    }
}
