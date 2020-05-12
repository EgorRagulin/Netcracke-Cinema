package com.netcracker.cinema.fapi.service.impl;

import com.netcracker.cinema.fapi.model.UserViewModel;
import com.netcracker.cinema.fapi.model.full.FullLoginViewModel;
import com.netcracker.cinema.fapi.model.LoginViewModel;
import com.netcracker.cinema.fapi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service("customUserDetailsService")
public class LoginServiceImpl implements UserDetailsService, LoginService {
    private String rootPath = "http://localhost:8080/api/login";

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public List<LoginViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        LoginViewModel[] loginViewModelResponse = restTemplate.getForObject(rootPath, LoginViewModel[].class);
        return loginViewModelResponse == null ? Collections.emptyList() : Arrays.asList(loginViewModelResponse);
    }

    @Override
    public LoginViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/?id=" + id, LoginViewModel.class);
    }

    @Override
    public FullLoginViewModel save(FullLoginViewModel fullLoginViewModel) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, fullLoginViewModel, FullLoginViewModel.class).getBody();
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(rootPath + "/?id=" + id);
    }

    @Override
    public FullLoginViewModel findFullById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/full/?id=" + id, FullLoginViewModel.class);
    }

    @Override
    public UserViewModel findUserByLoginId(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(rootPath + "/user/?id=" + id, UserViewModel.class);
    }

    @Override
    public LoginViewModel findLoginByUsername(String username) {
        RestTemplate restTemplate = new RestTemplate();
        LoginViewModel loginViewModel = restTemplate.getForObject(rootPath + "/?username=" + username, LoginViewModel.class);
        return loginViewModel;
    }

    @Override
    public LoginViewModel save(LoginViewModel loginViewModel) {
        loginViewModel.setPassword(bCryptPasswordEncoder.encode(loginViewModel.getPassword()));
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(rootPath, loginViewModel, LoginViewModel.class).getBody();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        LoginViewModel loginViewModel = findLoginByUsername(username);
        if (loginViewModel == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(loginViewModel.getUsername(), loginViewModel.getPassword(), getAuthority(loginViewModel));
    }

    private Set<SimpleGrantedAuthority> getAuthority(LoginViewModel loginViewModel) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + loginViewModel.getRole()));
        return authorities;
    }
}
