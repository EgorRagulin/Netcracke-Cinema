package com.netcracker.cinema.fapi.controller;


import com.netcracker.cinema.fapi.DTO.FullDTO.FullWalletDTO;
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

    @GetMapping
    public List<Wallet> findAllWallet() {
        return walletService.findAll();
    }

    @GetMapping(params = {"id"})
    public Wallet findWalletById(@RequestParam Long id) {
        return walletService.findById(id);
    }

    @PostMapping
    public FullWalletDTO saveWallet(@RequestBody FullWalletDTO fullWalletDTO) {
        return walletService.save(fullWalletDTO);
    }

    @DeleteMapping(params = {"id"})
    public void deleteWalletById(@RequestParam Long id) {
        walletService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullWalletDTO findFullWalletById(@RequestParam Long id) {
        return walletService.findFullById(id);
    }
}