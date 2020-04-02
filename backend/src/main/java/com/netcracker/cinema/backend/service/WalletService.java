package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface WalletService {
    List<Wallet> findAllWallet();

    Optional<Wallet> findWalletByUser(User user);

    Optional<Wallet> findWalletById(Long id);

    Wallet setWallet(Wallet wallet);

    void deleteWalletById(Long id);
}
