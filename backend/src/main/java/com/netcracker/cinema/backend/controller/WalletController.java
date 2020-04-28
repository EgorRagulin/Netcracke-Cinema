package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;
import com.netcracker.cinema.backend.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wallets/")
public class WalletController {
    @Autowired
    private WalletService walletService;

    @GetMapping
    public List<Wallet> getAllWallet() {
        return walletService.findAll();
    }

    @GetMapping(params = {"id"})
    public Wallet getWalletById(@RequestParam Long id) {
        return walletService.findById(id).get();
    }

    @PostMapping
    public Wallet setWallet(@RequestBody Wallet wallet) {
        return walletService.save(wallet);
    }

    @DeleteMapping(params = {"id"})
    public void deleteWalletById(@RequestParam Long id) {
        walletService.deleteById(id);
    }
}
