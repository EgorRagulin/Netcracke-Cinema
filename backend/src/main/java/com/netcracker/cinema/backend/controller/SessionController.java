package com.netcracker.cinema.backend.controller;

import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api/sessions")
public class SessionController {
    @Autowired
    private SessionService sessionService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Session> getAllCinema() {
        return sessionService.findAllSession();
    }

    @RequestMapping(value = "/{date}", method = RequestMethod.GET)
    public List<Session> getCinemaByCinemaName(@PathVariable(name = "date") Date date) {
        return sessionService.findSessionByDate(date);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.GET)
    public Session getCinemaById(@PathVariable(name = "id") Long id) {
        return sessionService.findSessionById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Session setCinema(@RequestBody Session session) {
        return sessionService.setSession(session);
    }

    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    public void deleteSession(@RequestBody Session session) {
        sessionService.deleteSession(session);
    }

    @RequestMapping(value = "/id={id}", method = RequestMethod.DELETE)
    public void deleteSessionById(@PathVariable(name = "id") Long id) {
        sessionService.deleteSessionById(id);
    }
}

