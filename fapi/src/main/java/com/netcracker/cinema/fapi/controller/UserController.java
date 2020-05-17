package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.model.full.FullUserViewModel;
import com.netcracker.cinema.fapi.model.TicketViewModel;
import com.netcracker.cinema.fapi.model.UserViewModel;
import com.netcracker.cinema.fapi.model.WalletViewModel;
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
    public List<UserViewModel> findAllUser() {
        return userService.findAll();
    }

    @GetMapping(params = {"id"})
    public UserViewModel findUserById(@RequestParam Long id) {
        return userService.findById(id);
    }

    @PostMapping
    public FullUserViewModel saveUser(@RequestBody FullUserViewModel fullUserViewModel) {
        return userService.save(fullUserViewModel);
    }

    @DeleteMapping(params = {"id"})
    public void deleteUserById(@RequestParam Long id) {
        userService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullUserViewModel findFullUserById(@RequestParam Long id) {
        return userService.findFullById(id);
    }

    @GetMapping(params = {"id"}, path = {"/wallet"})
    public WalletViewModel findWalletById(@RequestParam Long id) {
        return userService.findWalletByUserId(id);
    }

    @GetMapping(params = {"id"}, path = {"/tickets"})
    public List<TicketViewModel> findTicketsByUserId(@RequestParam Long id) {
        return userService.findTicketsByUserId(id);
    }
}
