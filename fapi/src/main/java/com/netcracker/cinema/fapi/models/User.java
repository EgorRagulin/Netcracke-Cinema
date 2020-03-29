package com.netcracker.cinema.fapi.models;

public class User {
    private long id;
    private String firstName;
    private String secondName;
    private String role;

    public User() {
    }

    public User(long id, String firstName, String secondName, String role) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
