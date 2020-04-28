package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/login")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @GetMapping
    public List<Login> getAllLogin() {
        return loginService.findAll();
    }

    @GetMapping(params = {"id"})
    public Login getLoginById(@RequestParam Long id) {
        return loginService.findById(id).get();
    }

    @PostMapping
    public Login setLogin(@RequestBody Login login) {
        return loginService.save(login);
    }

    @DeleteMapping(params = {"id"})
    public void deleteLoginById(@RequestParam Long id) {
        loginService.deleteById(id);
    }
}
