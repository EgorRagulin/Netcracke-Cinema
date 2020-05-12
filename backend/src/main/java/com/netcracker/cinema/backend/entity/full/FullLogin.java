package com.netcracker.cinema.backend.entity.full;

import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.entity.User;

public class FullLogin {
    private Long id;
    private String username;
    private String password;
    private String role;
    private User user;

    public FullLogin(Login login) {
        this.id = login.getId();
        this.username = login.getUsername();
        this.password = login.getPassword();
        this.role = login.getRole();
        this.user = login.getUser();
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
