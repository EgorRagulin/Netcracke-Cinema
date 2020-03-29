package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Wallet;
import com.netcracker.cinema.backend.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/wallets")
public class WalletController {
    @Autowired
    private WalletService walletService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Wallet> GetAllWallet(){
        return walletService.findAll();
    }
}
