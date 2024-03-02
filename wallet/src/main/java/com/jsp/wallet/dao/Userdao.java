package com.jsp.wallet.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.wallet.dto.Login;
import com.jsp.wallet.dto.User;
import com.jsp.wallet.repository.UserRepository;

@Repository
public class Userdao {
	@Autowired
	UserRepository repository;
	
	public User saveUser(User user) {
		return repository.save(user);
	}
	
	public List<User> findAll(){
		return repository.findAll();
	}
	
	public User findById(int id) {
		Optional<User> optional=repository.findById(id);
		
			return optional.get();
	
	}
	
	public User delete(int id) {
		Optional<User> optional=repository.findById(id);
		if(optional!=null) {
			repository.delete(optional.get());
		}
		return optional.get();
	}
	
	public User update(User user) {
		Optional<User> optional=repository.findById(user.getId());
		if(optional!=null) {
			repository.save(user);
		}
		return optional.get();
		
	}
	
	public User validateUser(Login login) {
		User user=repository.login(login.getAccountnumber(),login.getPassword());
		return user;
	}

}
