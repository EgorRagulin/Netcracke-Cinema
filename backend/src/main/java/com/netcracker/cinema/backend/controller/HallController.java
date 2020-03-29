package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/halls")
public class HallController {
    @Autowired
    private HallService hallService;
    @RequestMapping(value = "/{number}", method = RequestMethod.GET)
    public List<Hall> getCinemaByCinemaName(@PathVariable(name = "number") String number) {
        return hallService.find(number);
    }
}
