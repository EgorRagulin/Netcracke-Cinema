package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullUserDTO;
import com.netcracker.cinema.fapi.model.Ticket;
import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.model.Wallet;
import com.netcracker.cinema.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private String rootPath = "http://localhost:8080/api/users";

    @Override
    public List<User> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        User[] usersResponse = restTemplate.getForObject(rootPath, User[].class);
        return usersResponse == null ? Collections.emptyList() : Arrays.asList(usersResponse);
    }

    @Override
    public User findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/?id=" + id, User.class);
    }

    @Override
    public FullUserDTO save(FullUserDTO fullUserDTO) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, fullUserDTO, FullUserDTO.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }


    @Override
    public FullUserDTO findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/full/?id=" + id, FullUserDTO.class);
    }

    @Override
    public Wallet findWalletByUserId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/wallet/?id=" + id, Wallet.class);
    }

    @Override
    public List<Ticket> findTicketsByUserId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        Ticket[] usersResponse = restTemplate.getForObject(rootPath + "/tickets/?id=" + id, Ticket[].class);
        return usersResponse == null ? Collections.emptyList() : Arrays.asList(usersResponse);
    }
}
