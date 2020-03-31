package com.netcracker.cinema.fapi.service.impl;

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
    public List<Wallet> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        Wallet[] walletsResponse = restTemplate.getForObject(backendServerUrl + "/api/wallets/", Wallet[].class);
        return walletsResponse == null ? Collections.emptyList() : Arrays.asList(walletsResponse);
    }
}
