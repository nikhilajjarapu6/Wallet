package com.jsp.wallet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsp.wallet.dto.Account;

public interface AccountRepository extends JpaRepository<Account,Integer>{

}
