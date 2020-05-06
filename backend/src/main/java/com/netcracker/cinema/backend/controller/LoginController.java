package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.DTO.FullDTO.FullLoginDTO;
import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/logins")
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
    public FullLoginDTO saveLogin(@RequestBody Login login) {
        Login savedLogin = loginService.save(login);
        FullLoginDTO fullLoginDTO = new FullLoginDTO(savedLogin);
        return fullLoginDTO;
    }

    @DeleteMapping(params = {"id"})
    public void deleteLoginById(@RequestParam Long id) {
        loginService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullLoginDTO findFullLoginById(@RequestParam Long id) {
        Login login = loginService.findById(id).get();
        FullLoginDTO fullLoginDTO = new FullLoginDTO(login);
        return fullLoginDTO;
    }

    @GetMapping(params = {"id"}, path = {"/user"})
    public User findUserLoginById(@RequestParam Long id) {
        User user = loginService.findById(id).get().getUser();
        return user;
    }
}
