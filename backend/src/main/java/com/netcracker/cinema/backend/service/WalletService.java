package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface WalletService {
    List<Wallet> findAll();

    Optional<Wallet> findById(Long id);

    Wallet save(Wallet wallet);

    void deleteById(Long id);
}
