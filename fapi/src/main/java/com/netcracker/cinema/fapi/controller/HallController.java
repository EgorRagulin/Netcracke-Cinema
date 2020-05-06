package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullHallDTO;
import com.netcracker.cinema.fapi.model.Hall;
import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.service.HallService;
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
        return hallService.findById(id);
    }

    @PostMapping
    public FullHallDTO saveHall(@RequestBody FullHallDTO fullHallDTO) {
        return hallService.save(fullHallDTO);
    }

    @DeleteMapping(params = {"id"})
    public void deleteHallById(@RequestParam Long id) {
        hallService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullHallDTO findFullHallById(@RequestParam Long id) {
        return hallService.findFullById(id);
    }

    @GetMapping(params = {"id"}, path = {"/sessions/"})
    public List<Session> findSessionsByHallId(@RequestParam Long id) {
        return hallService.findSessionsByHallId(id);
    }
}
