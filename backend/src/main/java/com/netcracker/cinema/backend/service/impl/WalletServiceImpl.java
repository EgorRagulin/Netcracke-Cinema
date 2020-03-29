package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Wallet;
import com.netcracker.cinema.backend.repository.WalletRepository;
import com.netcracker.cinema.backend.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class WalletServiceImpl implements WalletService {
    @Autowired
    private WalletRepository walletRepository;

    @Override
    public List<Wallet> findAll() {
        return walletRepository.findAll();
    }
}
