package com.jsp.wallet.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.wallet.dao.Userdao;
import com.jsp.wallet.dto.Login;
import com.jsp.wallet.dto.User;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Service
public class UserService {
	@Autowired
	Userdao dao;
	
	public User saveUser(User user) {
		return dao.saveUser(user);
	}
	
	public List<User> findAll(){
		return dao.findAll();
		}
	
	public User findById(int id) {
		return dao.findById(id);
	
	}
	
	public User delete(int id) {
		return dao.delete(id);
	}
	
	public User update(User user) {
		return dao.update(user);
		
	}
	
	public User validateUser(Login login, HttpServletRequest request) {
//		return dao.validateUser(login);
		HttpSession session=request.getSession();	//to get the session tracking we need to call the httpservlet request
		User user=dao.validateUser(login);		//then call the repository method tore it in a variable
		if(user!=null) {
		session.setAttribute("user",user);}		//pass to the session with set attribute method
		return user;
	}

}
