package com.jsp.wallet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import com.jsp.wallet.dto.User;

public interface UserRepository extends JpaRepository<User,Integer> {
	
	@Query("select a from Login a where a.accountnumber=:accountnumber and a.password=:password")
	public User login(@RequestParam double accountnumber, @RequestParam String password);

}
