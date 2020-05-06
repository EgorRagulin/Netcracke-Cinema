package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.DTO.FullDTO.FullHallDTO;
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
    public FullHallDTO saveHall(@RequestBody Hall hall) {
        Hall saveHall = hallService.save(hall);
        FullHallDTO fullHallDTO = new FullHallDTO(saveHall);
        return fullHallDTO;
    }

    @DeleteMapping(params = {"id"})
    public void deleteHallById(@RequestParam Long id) {
        hallService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullHallDTO findFullHallById(@RequestParam Long id) {
        Hall hall = hallService.findById(id).get();
        FullHallDTO fullHallDTO = new FullHallDTO(hall);
        return fullHallDTO;
    }

    @GetMapping(params = {"id"}, path = {"/sessions"})
    public List<Session> findSessionByHallId(@RequestParam Long id) {
        return hallService.findById(id).get().getSessions();
    }
}
