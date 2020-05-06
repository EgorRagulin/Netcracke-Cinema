package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullWalletDTO;
import com.netcracker.cinema.fapi.model.Wallet;
import com.netcracker.cinema.fapi.service.WalletService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class WalletServiceImpl implements WalletService {
    private String rootPath = "http://localhost:8080/api/wallets";
    
    @Override
    public List<Wallet> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Wallet[] walletsResponse = restTemplate.getForObject(rootPath, Wallet[].class);
        return walletsResponse == null ? Collections.emptyList() : Arrays.asList(walletsResponse);
    }

    @Override
    public Wallet findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/?id=" + id, Wallet.class);
    }

    @Override
    public FullWalletDTO save(FullWalletDTO fullWalletDTO) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, fullWalletDTO, FullWalletDTO.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }

    @Override
    public FullWalletDTO findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/full/?id=" + id, FullWalletDTO.class);
    }
}
