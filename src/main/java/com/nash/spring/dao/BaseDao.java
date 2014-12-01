package com.nash.spring.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class BaseDao {

	@Autowired
	@Qualifier(value="firstSessionFactory")
	protected SessionFactory sessionFactoryTmp;

	public Session getSession() {
		return sessionFactoryTmp.openSession();
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactoryTmp = sessionFactory;
	}
	
	
}
