package com.netcracker.cinema.fapi.controller;

import com.netcracker.cinema.fapi.model.Session;
import com.netcracker.cinema.fapi.service.SessionService;
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

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Session> getAllSession(){
        return sessionService.findAll();
    }
}
