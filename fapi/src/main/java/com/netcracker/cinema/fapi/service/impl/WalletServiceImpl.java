package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.model.Wallet;
import com.netcracker.cinema.fapi.service.WalletService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class WalletServiceImpl implements WalletService {
    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<Wallet> findAllWallet() {
        RestTemplate restTemplate = new RestTemplate();
        Wallet[] walletsResponse = restTemplate.getForObject(backendServerUrl + "/api/wallets/", Wallet[].class);
        return walletsResponse == null ? Collections.emptyList() : Arrays.asList(walletsResponse);
    }

    @Override
    public Wallet findWalletByUser(User user) {
        return null;
    }

    @Override
    public Wallet findWalletById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/wallets/id=" + id, Wallet.class);
    }

    @Override
    public Wallet setWallet(Wallet wallet) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/wallets/", wallet, Wallet.class).getBody();
    }

    @Override
    public void deleteWalletById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/wallets/id=" + id);
    }
}
