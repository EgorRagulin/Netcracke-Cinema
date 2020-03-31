package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.Wallet;
import com.netcracker.cinema.fapi.service.WalletService;
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

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Wallet> getAllWallet(){
        return walletService.findAll();
    }
}
