package com.netcracker.cinema.fapi.model.full;

import com.netcracker.cinema.fapi.model.UserViewModel;

public class FullWalletViewModel {
    private Long id;
    private String name;
    private double balance;
    private UserViewModel user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public UserViewModel getUser() {
        return user;
    }

    public void setUser(UserViewModel user) {
        this.user = user;
    }
}
