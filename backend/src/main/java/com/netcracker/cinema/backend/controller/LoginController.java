package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/login")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Login> getAllLogin() {
        return loginService.findAllLogin();
    }

    @RequestMapping(value = "/{name}", method = RequestMethod.GET)
    public List<Login> getLoginByUsername(@PathVariable(name = "name") String userName) {
        return loginService.findAllLoginByUserName(userName);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Login getLoginById(@PathVariable(name = "id") int id) {
        return loginService.findLoginById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Login setLogin(@RequestBody Login login) {
        return loginService.setLogin(login);
    }
}
