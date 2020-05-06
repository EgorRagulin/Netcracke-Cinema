package com.netcracker.cinema.fapi.DTO;

import java.util.List;

public class PageDTO<T> {
    private List<T> collectionOfElements;
    private int pageNumber;
    private int pageSize;
    private int totalPages;
    private long totalElements;

    public List<T> getCollectionOfElements() {
        return collectionOfElements;
    }

    public void setCollectionOfElements(List<T> collectionOfElements) {
        this.collectionOfElements = collectionOfElements;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(long totalElements) {
        this.totalElements = totalElements;
    }
}
