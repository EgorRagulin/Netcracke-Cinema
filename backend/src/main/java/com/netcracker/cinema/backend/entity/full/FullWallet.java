package com.netcracker.cinema.backend.entity.full;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;

public class FullWallet {
    private Long id;
    private String name;
    private double balance;
    private User user;

    public FullWallet(Wallet wallet) {
        this.id = wallet.getId();
        this.name = wallet.getName();
        this.balance = wallet.getBalance();
        this.user = wallet.getUser();
    }

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
