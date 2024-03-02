package com.jsp.wallet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.wallet.dto.Login;
import com.jsp.wallet.dto.User;
import com.jsp.wallet.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class Usercontroller {
	@Autowired
	UserService service;
	
	@PostMapping("/user")
	public User saveUser(@RequestBody User user) {
		return service.saveUser(user);
	}
	
	@GetMapping("/user")
	public List<User> findAll(){
		return service.findAll();
		}
	
	@GetMapping("/user/{id}")
	public User findById(@PathVariable int id) {
		return service.findById(id);
	
	}
	
	@DeleteMapping("/user/{id}")
	public User delete(@PathVariable int id) {
		return service.delete(id);
	}
	
	@PutMapping("/user")
	public User update(@RequestBody User user) {
		return service.update(user);
		
	}
	
	@GetMapping("/user/login")
	public User login(@RequestBody Login login, HttpServletRequest request) {
		return service.validateUser(login, request);
	}
}
