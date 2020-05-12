package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.full.FullHall;
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
    public List<Hall> findAllHall() {
        return hallService.findAll();
    }

    @GetMapping(params = {"id"})
    public Hall findHallById(@RequestParam Long id) {
        return hallService.findById(id).get();
    }

    @PostMapping
    public FullHall saveHall(@RequestBody Hall hall) {
        Hall saveHall = hallService.save(hall);
        FullHall fullHall = new FullHall(saveHall);
        return fullHall;
    }

    @DeleteMapping(params = {"id"})
    public void deleteHallById(@RequestParam Long id) {
        hallService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullHall findFullHallById(@RequestParam Long id) {
        Hall hall = hallService.findById(id).get();
        FullHall fullHall = new FullHall(hall);
        return fullHall;
    }

    @GetMapping(params = {"id"}, path = {"/sessions"})
    public List<Session> findSessionByHallId(@RequestParam Long id) {
        return hallService.findById(id).get().getSessions();
    }
}
