package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.deposit.DepositModel;
import com.netcracker.cinema.fapi.model.full.FullWalletViewModel;
import com.netcracker.cinema.fapi.model.WalletViewModel;

import java.util.List;

public interface WalletService {
    List<WalletViewModel> findAll();

    WalletViewModel findById(Long id);

    WalletViewModel save(FullWalletViewModel fullWalletViewModel);

    void deleteById(Long id);

    WalletViewModel deposit(DepositModel deposit);
}
