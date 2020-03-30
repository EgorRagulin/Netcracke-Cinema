package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;
import com.netcracker.cinema.backend.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wallets")
public class WalletController {
    @Autowired
    private WalletService walletService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Wallet> getAllWallet() {
        return walletService.findAllWallet();
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public Wallet getWalletByUser(@RequestBody User user) {
        return walletService.findWalletByUser(user);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Wallet getWalletById(@PathVariable(name = "id") Long id) {
        return walletService.findWalletById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Wallet setWallet(@RequestBody Wallet wallet) {
        return walletService.setWallet(wallet);
    }
}
