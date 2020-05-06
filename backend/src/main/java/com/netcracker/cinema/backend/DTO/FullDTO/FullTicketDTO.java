package com.netcracker.cinema.backend.DTO.FullDTO;


import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.entity.User;

public class FullTicketDTO {
    private Long id;
    private int rowNumber;
    private int placeNumber;
    private boolean isSold;
    private double cost;
    private Session session;
    private User user;

    public FullTicketDTO(Ticket ticket) {
        this.id = ticket.getId();
        this.rowNumber = ticket.getRowNumber();
        this.placeNumber = ticket.getPlaceNumber();
        this.isSold = ticket.getIsSold();
        this.cost = ticket.getCost();
        this.session = ticket.getSession();
        this.user = ticket.getUser();
    }

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

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
