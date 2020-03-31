package com.netcracker.cinema.fapi.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

public class Cinema {
    private Long id;
    private String cinemaName;
    private String address;
    private String cinemaPicture;
    private List<Hall> halls;
}
