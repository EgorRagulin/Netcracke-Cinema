package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.repository.HallRepository;
import com.netcracker.cinema.backend.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class HallServiceImpl implements HallService {
    @Autowired
    private HallRepository hallRepository;

    @Override
    public List<Hall> findAll() {
        return hallRepository.findAll();
    }

    @Override
    public Optional<Hall> findById(Long id) {
        return hallRepository.findById(id);
    }

    @Override
    public Hall save(Hall hall) {
        return hallRepository.save(hall);
    }

    @Override
    public void deleteById(Long id) {
        hallRepository.deleteById(id);
    }
}
