package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.Hall;
import com.netcracker.cinema.fapi.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/halls")
public class HallController {
    @Autowired
    private HallService hallService;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Hall> getAllUsers(){
        return hallService.findAll();
    }
}
