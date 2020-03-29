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
    public List<Hall> find(String number) {
        return hallRepository.findByHallNumber(Integer.parseInt(number));
    }
}
