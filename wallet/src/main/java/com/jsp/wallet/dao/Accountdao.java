package com.jsp.wallet.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.wallet.dto.Account;
import com.jsp.wallet.repository.AccountRepository;

@Repository
public class Accountdao {
	@Autowired
	AccountRepository repository;
	
	public Account save(Account account) {
		return repository.save(account);
	}
	
	public List<Account> findAll(){
		return repository.findAll();
	}
	
	public Account findById(int id) {
		Optional<Account> optional=repository.findById(id);
		return optional.get();
	}
	
	public Account delete(int id) {
		Optional<Account> optional=repository.findById(id);
		if(optional!=null) {
			repository.delete(optional.get());
		}
		return optional.get();
	}
	
	public Account update(Account account) {
		Optional<Account> optional=repository.findById(account.getId());
		if(optional!=null) {
			repository.save(account);
		}
		return optional.get();
	}

}
