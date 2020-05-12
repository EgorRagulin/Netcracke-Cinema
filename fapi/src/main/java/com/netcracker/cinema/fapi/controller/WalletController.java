package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.model.full.FullWalletViewModel;
import com.netcracker.cinema.fapi.model.WalletViewModel;
import com.netcracker.cinema.fapi.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wallets")
public class WalletController {
    @Autowired
    private WalletService walletService;

    @GetMapping
    public List<WalletViewModel> findAllWallet() {
        return walletService.findAll();
    }

    @GetMapping(params = {"id"})
    public WalletViewModel findWalletById(@RequestParam Long id) {
        return walletService.findById(id);
    }

    @PostMapping
    public FullWalletViewModel saveWallet(@RequestBody FullWalletViewModel fullWalletViewModel) {
        return walletService.save(fullWalletViewModel);
    }

    @DeleteMapping(params = {"id"})
    public void deleteWalletById(@RequestParam Long id) {
        walletService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullWalletViewModel findFullWalletById(@RequestParam Long id) {
        return walletService.findFullById(id);
    }
}