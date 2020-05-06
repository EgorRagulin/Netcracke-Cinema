package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullWalletDTO;
import com.netcracker.cinema.fapi.model.Wallet;

import java.util.List;

public interface WalletService {
    List<Wallet> findAll();

    Wallet findById(Long id);

    FullWalletDTO save(FullWalletDTO fullWalletDTO);

    void deleteById(Long id);

    FullWalletDTO findFullById(Long id);
}
