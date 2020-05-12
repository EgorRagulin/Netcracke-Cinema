package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.full.FullLogin;
import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/login")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @GetMapping
    public List<Login> findAllLogin() {
        return loginService.findAll();
    }

    @GetMapping(params = {"id"})
    public Login findLoginById(@RequestParam Long id) {
        return loginService.findById(id).get();
    }

    @PostMapping
    public FullLogin saveLogin(@RequestBody Login login) {
        Login savedLogin = loginService.save(login);
        FullLogin fullLogin = new FullLogin(savedLogin);
        return fullLogin;
    }

    @DeleteMapping(params = {"id"})
    public void deleteLoginById(@RequestParam Long id) {
        loginService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullLogin findFullLoginById(@RequestParam Long id) {
        Login login = loginService.findById(id).get();
        FullLogin fullLogin = new FullLogin(login);
        return fullLogin;
    }

    @GetMapping(params = {"id"}, path = {"/user"})
    public User findUserLoginById(@RequestParam Long id) {
        User user = loginService.findById(id).get().getUser();
        return user;
    }

    @GetMapping(params = {"username"})
    public ResponseEntity<Login> findLoginByUsername(@RequestParam String username) {
        Login user = loginService.findByUsername(username).get();
        return ResponseEntity.ok(user);
    }
}
