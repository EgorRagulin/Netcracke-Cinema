package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Wallet;
import com.netcracker.cinema.backend.models.deposit.DepositModel;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface WalletService {
    List<Wallet> findAll();

    Optional<Wallet> findById(Long id);

    Wallet save(Wallet wallet);

    void deleteById(Long id);

    Wallet deposit(DepositModel deposit);

    Wallet pay(Long walletId, double cost);
}
