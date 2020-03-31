package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.model.Login;
import com.netcracker.cinema.fapi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/logins")
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
    public Login getLoginById(@PathVariable(name = "id") Long id) {
        return loginService.findLoginById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Login setLogin(@RequestBody Login login) {
        return loginService.setLogin(login);
    }

    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    public void deleteLogin(@RequestBody Login login) {
        loginService.deleteLogin(login);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteLoginById(@PathVariable(name = "id") Long id) {
        loginService.deleteLoginById(id);
    }
}
