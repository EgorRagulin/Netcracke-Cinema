package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.HallViewModel;
import com.netcracker.cinema.fapi.model.full.FullHallViewModel;
import com.netcracker.cinema.fapi.model.SessionViewModel;
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
    public List<HallViewModel> findAllHall() {
        return hallService.findAll();
    }

    @GetMapping(params = {"id"})
    public HallViewModel findHallById(@RequestParam Long id) {
        return hallService.findById(id);
    }

    @PostMapping
    public FullHallViewModel saveHall(@RequestBody FullHallViewModel fullHallViewModel) {
        return hallService.save(fullHallViewModel);
    }

    @DeleteMapping(params = {"id"})
    public void deleteHallById(@RequestParam Long id) {
        hallService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullHallViewModel findFullHallById(@RequestParam Long id) {
        return hallService.findFullById(id);
    }

    @GetMapping(params = {"id"}, path = {"/sessions/"})
    public List<SessionViewModel> findSessionsByHallId(@RequestParam Long id) {
        return hallService.findSessionsByHallId(id);
    }
}
