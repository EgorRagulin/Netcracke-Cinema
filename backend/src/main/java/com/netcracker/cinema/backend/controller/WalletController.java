package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.DTO.FullDTO.FullWalletDTO;
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

    @GetMapping
    public List<Wallet> findAllWallet() {
        return walletService.findAll();
    }

    @GetMapping(params = {"id"})
    public Wallet findWalletById(@RequestParam Long id) {
        return walletService.findById(id).get();
    }

    @PostMapping
    public FullWalletDTO saveWallet(@RequestBody Wallet wallet) {
        Wallet savedWallet = walletService.save(wallet);
        FullWalletDTO fullWalletDTO = new FullWalletDTO(savedWallet);
        return fullWalletDTO;
    }

    @DeleteMapping(params = {"id"})
    public void deleteWalletById(@RequestParam Long id) {
        walletService.deleteById(id);
    }


    @GetMapping(params = {"id"}, path = {"/full"})
    public FullWalletDTO findFullWalletById(@RequestParam Long id) {
        Wallet wallet = walletService.findById(id).get();
        FullWalletDTO fullWalletDTO = new FullWalletDTO(wallet);
        return fullWalletDTO;
    }
}
