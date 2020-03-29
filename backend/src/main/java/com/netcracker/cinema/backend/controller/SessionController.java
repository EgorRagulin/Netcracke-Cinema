package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/sessions")
public class SessionController {
    @Autowired
    private SessionService sessionService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Session> GetAllSession() {
        return sessionService.findAll();
    }
}
