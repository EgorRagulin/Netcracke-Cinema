package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.model.Wallet;

import java.util.List;

public interface WalletService {
    List<Wallet> findAllWallet();

    Wallet findWalletByUser(User user);

    Wallet findWalletById(Long id);

    Wallet setWallet(Wallet wallet);

    void deleteWalletById(Long id);
}
