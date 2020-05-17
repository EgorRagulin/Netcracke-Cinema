package com.netcracker.cinema.fapi.model.full;

import com.netcracker.cinema.fapi.model.SessionViewModel;
import com.netcracker.cinema.fapi.model.UserViewModel;

public class FullTicketViewModel {
    private Long id;
    private int rowNumber;
    private int placeNumber;
    private boolean isSold;
    private SessionViewModel session;
    private UserViewModel user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getRowNumber() {
        return rowNumber;
    }

    public void setRowNumber(int rowNumber) {
        this.rowNumber = rowNumber;
    }

    public int getPlaceNumber() {
        return placeNumber;
    }

    public void setPlaceNumber(int placeNumber) {
        this.placeNumber = placeNumber;
    }

    public boolean getIsSold() {
        return isSold;
    }

    public void setIsSold(boolean isSold) {
        this.isSold = isSold;
    }

    public SessionViewModel getSession() {
        return session;
    }

    public void setSession(SessionViewModel session) {
        this.session = session;
    }

    public UserViewModel getUser() {
        return user;
    }

    public void setUser(UserViewModel user) {
        this.user = user;
    }
}
