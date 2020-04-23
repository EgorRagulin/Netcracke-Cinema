//package com.netcracker.cinema.backend.myPaging;
//
//import com.netcracker.cinema.backend.sort.MySort;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//
//public class MyPaging <T>{
//    private T service;
//
//    MyPaging(T service) {
//        this.service = service;
//    }
//
//    private Page getPage(int pageNumber, int pageSize, String sortProperty) {
//        return service.findPage(new PageRequest(pageNumber, pageSize, MySort.getSortByProperty(sortProperty)));
//    }
//
//    private Page getPage(int pageSize) {
//        return service.findPage(new PageRequest(0, pageSize));
//    }
//}