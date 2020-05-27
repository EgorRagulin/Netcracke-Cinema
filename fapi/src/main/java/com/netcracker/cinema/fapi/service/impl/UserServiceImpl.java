package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.DTO.CompleteTicketDTO;
import com.netcracker.cinema.fapi.model.TicketViewModel;
import com.netcracker.cinema.fapi.model.UserViewModel;
import com.netcracker.cinema.fapi.model.full.FullUserViewModel;
import com.netcracker.cinema.fapi.model.WalletViewModel;
import com.netcracker.cinema.fapi.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private String rootPath = "http://localhost:8080/api/users";

    @Override
    public List<UserViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        UserViewModel[] usersResponse = restTemplate.getForObject(rootPath, UserViewModel[].class);
        return usersResponse == null ? Collections.emptyList() : Arrays.asList(usersResponse);
    }

    @Override
    public UserViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/?id=" + id, UserViewModel.class);
    }

    @Override
    public FullUserViewModel save(FullUserViewModel fullUserViewModel) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, fullUserViewModel, FullUserViewModel.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }


    @Override
    public FullUserViewModel findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/full/?id=" + id, FullUserViewModel.class);
    }

    @Override
    public WalletViewModel findWalletByUserId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/wallet/?id=" + id, WalletViewModel.class);
    }

    @Override
    public List<CompleteTicketDTO> findCompleteTicketsByUserId(Long userId) {
        RestTemplate restTemplate = new RestTemplate();
        CompleteTicketDTO[] usersResponse = restTemplate.getForObject(rootPath + "/complete-tickets/?userId=" + userId, CompleteTicketDTO[].class);
        return usersResponse == null ? Collections.emptyList() : Arrays.asList(usersResponse);
    }
}
