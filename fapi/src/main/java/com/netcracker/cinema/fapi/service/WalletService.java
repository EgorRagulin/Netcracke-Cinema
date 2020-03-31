package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.Wallet;

import java.util.List;

public interface WalletService {
    List<Wallet> findAll();
}
