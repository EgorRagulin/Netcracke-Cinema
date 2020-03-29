package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Wallet;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface WalletService {
    List<Wallet> findAll();
}
