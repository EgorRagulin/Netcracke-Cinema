package com.netcracker.cinema.backend.DTO;

public class MyPaging {
    private int totalPages;

    public MyPaging(int totalPages) {
        this.totalPages = totalPages;
    }

    public int getTotalPages() {
        return totalPages;
    }
}
