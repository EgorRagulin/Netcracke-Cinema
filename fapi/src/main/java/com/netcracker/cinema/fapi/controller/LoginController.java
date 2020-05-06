package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullLoginDTO;
import com.netcracker.cinema.fapi.model.Login;
import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/logins")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @GetMapping
    public List<Login> findAllLogins() {
        return loginService.findAll();
    }

    @GetMapping(params = {"id"})
    public Login findLoginById(@RequestParam Long id) {
        return loginService.findById(id);
    }

    @PostMapping
    public FullLoginDTO saveLogin(@RequestBody FullLoginDTO fullLoginDTO) {
        return loginService.save(fullLoginDTO);
    }

    @DeleteMapping(params = {"id"})
    public void deleteLoginById(@RequestParam Long id) {
        loginService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullLoginDTO findFullLoginById(@RequestParam Long id) {
        return loginService.findFullById(id);
    }

    @GetMapping(params = {"id"}, path = {"/user"})
    public User findUserLoginById(@RequestParam Long id) {
        return loginService.findUserByLoginId(id);
    }
}
