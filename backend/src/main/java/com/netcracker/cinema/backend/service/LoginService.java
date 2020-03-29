package com.netcracker.cinema.backend.service;

import com.netcracker.cinema.backend.entity.Login;
import org.springframework.stereotype.Component;

@Component
public interface LoginService {
    Login find(String username);
}
