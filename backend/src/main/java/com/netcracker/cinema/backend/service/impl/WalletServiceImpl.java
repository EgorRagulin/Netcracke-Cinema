package com.netcracker.cinema.backend.service.impl;

import com.netcracker.cinema.backend.entity.Wallet;
import com.netcracker.cinema.backend.models.deposit.DepositModel;
import com.netcracker.cinema.backend.repository.WalletRepository;
import com.netcracker.cinema.backend.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.DecimalFormat;
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

    @Override
    public Wallet deposit(DepositModel deposit) {
        Long walletId = deposit.getWalletId();
        if (walletId != null) {
            Wallet wallet = walletRepository.findById(walletId).get();
            if (wallet != null) {
                double newBalance = Math.round((wallet.getBalance() + deposit.getDepositValue()) * 100) / 100.0;
                wallet.setBalance(newBalance);
                walletRepository.save(wallet);
                return walletRepository.findById(deposit.getWalletId()).get();
            }
        }
        return null;
    }

    @Override
    public Wallet pay(Long walletId, double cost) {
       Wallet wallet = walletRepository.findById(walletId).get();
        double newBalance = Math.round((wallet.getBalance() - cost) * 100) / 100.0;
       if (newBalance > 0 ) {
           wallet.setBalance(newBalance);
           Wallet savedWallet = walletRepository.save(wallet);
           return savedWallet;
       }
       else return null;
    }
}
