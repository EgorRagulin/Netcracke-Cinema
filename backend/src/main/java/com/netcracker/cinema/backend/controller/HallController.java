package com.netcracker.cinema.backend.controller;

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

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Hall> getAllHall() {
        return hallService.findAllHall();
    }

    @RequestMapping(value = "/{number}", method = RequestMethod.GET)
    public List<Hall> getAllHallByHallNumber(@PathVariable(name = "number") int hallNumber) {
        return hallService.findAllHallByHallNumber(hallNumber);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Hall getHallById(@PathVariable(name = "id") Long id) {
        return hallService.findHallById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Hall setHall(@RequestBody Hall hall) {
        return hallService.setHall(hall);
    }

    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    public void deleteHall(@RequestBody Hall hall) {
        hallService.deleteHall(hall);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteHallById(@PathVariable(name = "id") Long id) {
        hallService.deleteHallById(id);
    }
}
