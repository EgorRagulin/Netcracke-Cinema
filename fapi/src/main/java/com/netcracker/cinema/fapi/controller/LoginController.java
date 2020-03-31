package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.model.Login;
import com.netcracker.cinema.fapi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/logins")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Login> getAllLogin(){
        return loginService.findAll();
    }
}
