package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.repository.HallRepository;
import com.netcracker.cinema.backend.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class HallServiceImpl implements HallService {
    @Autowired
    private HallRepository hallRepository;

    @Override
    public List<Hall> findAllHall() {
        return hallRepository.findAll();
    }

    @Override
    public List<Hall> findAllHallByHallNumber(int number) {
        return hallRepository.findByHallNumber(number);
    }

    @Override
    public Hall findHallById(Long id) {
        return hallRepository.findById(id).get();
    }

    @Override
    public Hall setHall(Hall hall) {
        return hallRepository.save(hall);
    }
}
