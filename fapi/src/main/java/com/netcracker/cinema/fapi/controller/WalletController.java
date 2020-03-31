package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.model.Wallet;
import com.netcracker.cinema.fapi.service.WalletService;
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

    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    public void deleteWallet(@RequestBody Wallet wallet) {
        walletService.deleteWallet(wallet);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteWalletById(@PathVariable(name = "id") Long id) {
        walletService.deleteWalletById(id);
    }
}
