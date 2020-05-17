package com.netcracker.cinema.fapi.model.security;

import com.netcracker.cinema.fapi.model.LoginViewModel;

public class ShortLoginModel {
    private Long id;
    private String username;
    private String role;

    public ShortLoginModel(LoginViewModel login) {
        this.id = login.getId();
        this.username = login.getUsername();
        this.role = login.getRole();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
