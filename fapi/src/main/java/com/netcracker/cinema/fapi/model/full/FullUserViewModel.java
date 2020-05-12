package com.netcracker.cinema.fapi.model.full;


import com.netcracker.cinema.fapi.model.LoginViewModel;
import com.netcracker.cinema.fapi.model.TicketViewModel;
import com.netcracker.cinema.fapi.model.WalletViewModel;

import java.util.List;

public class FullUserViewModel {
    private Long id;
    private String firstName;
    private String secondName;
    private String email;
    private int phoneNumber;
    private LoginViewModel login;
    private WalletViewModel wallet;
    private List<TicketViewModel> tickets;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public LoginViewModel getLogin() {
        return login;
    }

    public void setLogin(LoginViewModel login) {
        this.login = login;
    }

    public WalletViewModel getWallet() {
        return wallet;
    }

    public void setWallet(WalletViewModel wallet) {
        this.wallet = wallet;
    }

    public List<TicketViewModel> getTickets() {
        return tickets;
    }

    public void setTickets(List<TicketViewModel> tickets) {
        this.tickets = tickets;
    }
}
