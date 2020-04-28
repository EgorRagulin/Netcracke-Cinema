package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;
import com.netcracker.cinema.backend.repository.WalletRepository;
import com.netcracker.cinema.backend.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class WalletServiceImpl implements WalletService {
    @Autowired
    private WalletRepository walletRepository;


    @Override
    public List<Wallet> findAll() {
        return walletRepository.findAll();
    }

    @Override
    public Optional<Wallet>  findById(Long id) {
        return walletRepository.findById(id);
    }

    @Override
    public Wallet save(Wallet wallet) {
        return walletRepository.save(wallet);
    }

    @Override
    public void deleteById(Long id) {
        walletRepository.deleteById(id);
    }
}
