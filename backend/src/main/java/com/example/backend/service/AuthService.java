package com.example.backend.service;

import com.example.backend.dto.ApiResponse;
import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.SignupRequest;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ApiResponse signup(SignupRequest request) {

        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return new ApiResponse(false, "Username already exists");
        }

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return new ApiResponse(false, "Email already exists");
        }

        User user = new User();

        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        userRepository.save(user);

        return new ApiResponse(true, "Account created successfully");
    }

    public ApiResponse login(LoginRequest request) {

    if (userRepository.findByUsernameAndPassword(
            request.getUsername(),
            request.getPassword()
    ).isPresent()) {

        return new ApiResponse(true, "Login successful");
    }

    return new ApiResponse(false, "Invalid username or password");

}

}