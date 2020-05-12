package com.netcracker.cinema.fapi.service;

import com.netcracker.cinema.fapi.model.TicketViewModel;
import com.netcracker.cinema.fapi.model.UserViewModel;
import com.netcracker.cinema.fapi.model.full.FullUserViewModel;
import com.netcracker.cinema.fapi.model.WalletViewModel;

import java.util.List;

public interface UserService {
    List<UserViewModel> findAll();

    UserViewModel findById(Long id);

    FullUserViewModel save(FullUserViewModel fullUserViewModel);

    void deleteById(Long id);

    FullUserViewModel findFullById(Long id);

    WalletViewModel findWalletByUserId(Long id);

    List<TicketViewModel> findTicketsByUserId(Long id);
}
