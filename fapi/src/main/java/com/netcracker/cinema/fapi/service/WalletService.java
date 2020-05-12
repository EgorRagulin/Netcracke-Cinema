package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.full.FullWalletViewModel;
import com.netcracker.cinema.fapi.model.WalletViewModel;

import java.util.List;

public interface WalletService {
    List<WalletViewModel> findAll();

    WalletViewModel findById(Long id);

    FullWalletViewModel save(FullWalletViewModel fullWalletViewModel);

    void deleteById(Long id);

    FullWalletViewModel findFullById(Long id);
}
