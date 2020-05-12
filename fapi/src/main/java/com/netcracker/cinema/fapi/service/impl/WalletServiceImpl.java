package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.full.FullWalletViewModel;
import com.netcracker.cinema.fapi.model.WalletViewModel;
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
    public List<WalletViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        WalletViewModel[] walletsResponse = restTemplate.getForObject(rootPath, WalletViewModel[].class);
        return walletsResponse == null ? Collections.emptyList() : Arrays.asList(walletsResponse);
    }

    @Override
    public WalletViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/?id=" + id, WalletViewModel.class);
    }

    @Override
    public FullWalletViewModel save(FullWalletViewModel fullWalletViewModel) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, fullWalletViewModel, FullWalletViewModel.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }

    @Override
    public FullWalletViewModel findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/full/?id=" + id, FullWalletViewModel.class);
    }
}
