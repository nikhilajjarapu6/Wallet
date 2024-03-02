package com.jsp.wallet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.wallet.dao.Accountdao;
import com.jsp.wallet.dto.Account;

@Service
public class AccountService {
	@Autowired
	Accountdao dao;
	
	public Account save(Account account) {
		return dao.save(account);
	}
	
	public List<Account> findAll(){
		return dao.findAll();
	}
	
	public Account findById(int id) {
		return dao.findById(id);
	}
	
	public Account delete(int id) {
		return dao.delete(id);
	}
	
	public Account update(Account account) {
		return dao.update(account);
	}


}
