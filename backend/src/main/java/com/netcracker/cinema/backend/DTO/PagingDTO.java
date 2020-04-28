package com.netcracker.cinema.backend.DTO;

public class PagingDTO {
    private int totalPages;
    private long totalElements;

    public PagingDTO(int totalPages, long totalElements) {
        this.totalPages = totalPages;
        this.totalElements = totalElements;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public long getTotalElements() {
        return totalElements;
    }
}
