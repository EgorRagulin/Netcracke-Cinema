package com.netcracker.cinema.backend.repository;

import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WalletRepository extends CrudRepository<Wallet, Long> {
    List<Wallet> findAll();

    Optional<Wallet> findById(Long id);

    Wallet save(Wallet wallet);

    void deleteById(Long id);
}
