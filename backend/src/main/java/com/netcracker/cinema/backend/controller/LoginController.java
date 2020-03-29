package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public Login getLoginByUsername(@PathVariable(name = "username") String username) {
        return loginService.find(username);
    }
}
