package com.netcracker.cinema.backend.sort;

import org.springframework.data.domain.Sort;

public class MySort {
    public static Sort getSortByProperty(String sortProperty) {
        return new Sort(new Sort.Order(Sort.Direction.ASC, sortProperty));
    }
}
