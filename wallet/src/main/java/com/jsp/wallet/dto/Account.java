package com.jsp.wallet.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private double accountNumber;
	private double minbal;
	private double intibal;
	private double ammount;
	
	@OneToOne
	@JoinColumn
	private User user;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(double accountNumber) {
		this.accountNumber = accountNumber;
	}
	public double getMinbal() {
		return minbal;
	}
	public void setMinbal(double minbal) {
		this.minbal = minbal;
	}
	public double getIntibal() {
		return intibal;
	}
	public void setIntibal(double intibal) {
		this.intibal = intibal;
	}
	public double getAmmount() {
		return ammount;
	}
	public void setAmmount(double ammount) {
		this.ammount = ammount;
	}
	
	
}
