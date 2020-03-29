package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.Wallet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WalletRepository extends CrudRepository<Wallet, Long> {
    List<Wallet> findAll();
}
