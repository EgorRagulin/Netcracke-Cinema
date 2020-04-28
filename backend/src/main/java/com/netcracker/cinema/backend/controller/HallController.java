package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Cinema;
import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/halls")
public class HallController {
    @Autowired
    private HallService hallService;

    @GetMapping
    public List<Hall> getAllHall() {
        return hallService.findAll();
    }

    @GetMapping(params = {"id"})
    public Hall getHallById(@RequestParam Long id) {
        return hallService.findById(id).get();
    }

    @GetMapping(params = {"id"}, path = {"/sessions/"})
    public List<Session> getSessionByHallId(@RequestParam Long id) {
        return hallService.findById(id).get().getSessions();
    }

    @PostMapping
    public Hall setHall(@RequestBody Hall hall) {
        return hallService.save(hall);
    }

    @DeleteMapping(params = {"id"})
    public void deleteHallById(@RequestParam Long id) {
        hallService.deleteById(id);
    }
}
