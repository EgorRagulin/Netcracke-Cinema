package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.full.FullCinema;
import com.netcracker.cinema.backend.entity.Cinema;
import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.entity.full.FullHall;
import com.netcracker.cinema.backend.service.CinemaService;
import com.netcracker.cinema.backend.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cinemas")
public class CinemaController {
    @Autowired
    private CinemaService cinemaService;

    @Autowired
    private HallService hallService;

    @GetMapping
    public List<Cinema> findAllCinemas() {
        return cinemaService.findAll();
    }

    @GetMapping(params = {"id"})
    public Cinema findCinemaById(@RequestParam Long id) {
        return cinemaService.findById(id).get();
    }

    @PostMapping
    public FullCinema saveCinema(@RequestBody Cinema cinema) {
        Cinema savedCinema = cinemaService.save(cinema);
        FullCinema fullCinema = new FullCinema(savedCinema);
        return fullCinema;
    }

    @DeleteMapping(params = {"id"})
    public void deleteCinemaById(@RequestParam Long id) {
        cinemaService.deleteById(id);
    }

    @GetMapping(params = {"id"}, path = {"/full"})
    public FullCinema findFullCinemaById(@RequestParam Long id) {
        Cinema cinema = cinemaService.findById(id).get();
        FullCinema fullCinema = new FullCinema(cinema);
        return fullCinema;
    }

    @GetMapping(params = {"id"}, path = {"/halls"})
    public List<Hall> findHallsByCinemaId(@RequestParam Long id) {
        return cinemaService.findById(id).get().getHalls();
    }

    @PostMapping(path = {"/add-hall"})
    public List<Hall> addHallToCinema(@RequestBody Cinema cinema) {

        List<Hall> cinemaHalls = cinemaService.findById(cinema.getId()).get().getHalls();
        Hall newHall;

        if (cinemaHalls.isEmpty()) {
            newHall = FullHall.getNewHall(1, cinema);
        }
        else {
            int maxHallNumber = 1;
            for (int i = 0; i < cinemaHalls.size(); i++) {
                int currentHallNumber = cinemaHalls.get(i).getHallNumber();
                if (currentHallNumber > maxHallNumber) maxHallNumber = currentHallNumber;
            }
            newHall = FullHall.getNewHall(maxHallNumber + 1, cinema);
        }

        cinemaHalls.add(hallService.save(newHall));

        return cinemaService.findById(cinema.getId()).get().getHalls();
    }
}
