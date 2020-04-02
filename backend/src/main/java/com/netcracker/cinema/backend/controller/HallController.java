package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Cinema;
import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/halls")
public class HallController {
    @Autowired
    private HallService hallService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Hall> getAllHall() {
        return hallService.findAllHall();
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Hall getHallById(@PathVariable(name = "id") Long id) {
        return hallService.findHallById(id).get();
    }

    @RequestMapping(value = "/id={id}/cinema", method = RequestMethod.GET)
    public Cinema getCinemaByHallId(@PathVariable(name = "id") Long id) {
        return hallService.findHallById(id).get().getCinema();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Hall setHall(@RequestBody Hall hall) {
        return hallService.setHall(hall);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteHallById(@PathVariable(name = "id") Long id) {
        hallService.deleteHallById(id);
    }
}
