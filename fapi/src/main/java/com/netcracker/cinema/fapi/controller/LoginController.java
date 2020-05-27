package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.LoginViewModel;
import com.netcracker.cinema.fapi.model.UserViewModel;
import com.netcracker.cinema.fapi.model.full.FullLoginViewModel;
import com.netcracker.cinema.fapi.model.security.ShortLoginModel;
import com.netcracker.cinema.fapi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/login")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PreAuthorize("hasRole('admin')")
    @GetMapping
    public List<LoginViewModel> getAll(){
        return loginService.findAll();
    }

    @PreAuthorize("hasRole('admin')")
    @GetMapping(params = {"id"})
    public LoginViewModel findLoginById(@RequestParam Long id) {
        return loginService.findById(id);
    }

    @PreAuthorize("isAnonymous()")
    @GetMapping(params = {"login"})
    public LoginViewModel getLoginByUsername(@PathVariable String username) {
        return loginService.findLoginByUsername(username);
    }

    @PreAuthorize("isAnonymous()")
    @GetMapping(params = {"id"}, path = {"/full"})
    public FullLoginViewModel findFullLoginById(@RequestParam Long id) {
        return loginService.findFullById(id);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(params = {"id"}, path = {"/user"})
    public UserViewModel findUserByLoginId(@RequestParam Long id) {
        return loginService.findUserByLoginId(id);
    }

    @PreAuthorize("isAnonymous()")
    @PostMapping(path = {"/sign-up"})
    public LoginViewModel save(@RequestBody LoginViewModel loginViewModel){
        return loginService.save(loginViewModel);
    }

    @PreAuthorize("hasRole('admin')")
    @DeleteMapping(params = {"id"})
    public void deleteLoginById(@RequestParam Long id) {
        loginService.deleteById(id);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(path = {"/current-login"})
    public ShortLoginModel getCurrentLogin() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        LoginViewModel fullLogin = loginService.findLoginByUsername(((org.springframework.security.core.userdetails.User) authentication.getPrincipal()).getUsername());
        return new ShortLoginModel(fullLogin);
    }
}
