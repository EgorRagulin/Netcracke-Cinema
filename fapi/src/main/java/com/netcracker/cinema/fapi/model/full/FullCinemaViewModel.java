package com.netcracker.cinema.fapi.model.full;

import com.netcracker.cinema.fapi.model.HallViewModel;

import java.util.List;

public class FullCinemaViewModel {
    private Long id;
    private String name;
    private String address;
    private byte[] picture;
    private List<HallViewModel> halls;

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public byte[] getPicture() {
        return picture;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public List<HallViewModel> getHalls() {
        return halls;
    }

    public void setHalls(List<HallViewModel> halls) {
        this.halls = halls;
    }
}
