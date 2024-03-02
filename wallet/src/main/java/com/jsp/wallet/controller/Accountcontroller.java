package com.jsp.wallet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.wallet.dto.Account;
import com.jsp.wallet.service.AccountService;

@RestController
public class Accountcontroller {
	@Autowired
	AccountService service;
	
	
	@PostMapping("/account")
	public Account save(@RequestBody Account account) {
		return service.save(account);
	}
	
	@GetMapping("/account")
	public List<Account> findAll(){
		return service.findAll();
	}
	
	@GetMapping("/account/{id}")
	public Account findById(@PathVariable int id) {
		return service.findById(id);
	}
	
	@DeleteMapping("/account")
	public Account delete(@PathVariable int id) {
		return service.delete(id);
	}
	
	@PutMapping("/account")
	public Account update(@RequestBody Account account) {
		return service.update(account);
	}

	
	
}
