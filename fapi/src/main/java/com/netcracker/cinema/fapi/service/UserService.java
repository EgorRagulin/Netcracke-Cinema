package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.DTO.FullDTO.FullUserDTO;
import com.netcracker.cinema.fapi.model.Ticket;
import com.netcracker.cinema.fapi.model.User;
import com.netcracker.cinema.fapi.model.Wallet;

import java.util.List;

public interface UserService {
    List<User> findAll();

    User findById(Long id);

    FullUserDTO save(FullUserDTO fullUserDTO);

    void deleteById(Long id);

    FullUserDTO findFullById(Long id);

    Wallet findWalletByUserId(Long id);

    List<Ticket> findTicketsByUserId(Long id);
}
