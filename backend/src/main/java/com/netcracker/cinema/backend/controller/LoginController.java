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

    @RequestMapping(method = RequestMethod.GET)
    public List<Login> getAllLogin() {
        return loginService.findAllLogin();
    }

    @RequestMapping(value = "/username={username}password={password}", method = RequestMethod.GET)
    public User getUserByLoginUsernameAndPassword(@PathVariable(name = "username") String username, @PathVariable(name = "password") String password) {
        return loginService.findLoginByUsernameAndPassword(username, password).get().getUser();
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Login getLoginById(@PathVariable(name = "id") Long id) {
        return loginService.findLoginById(id).get();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Login setLogin(@RequestBody Login login) {
        return loginService.setLogin(login);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteLoginById(@PathVariable(name = "id") Long id) {
        loginService.deleteLoginById(id);
    }
}
