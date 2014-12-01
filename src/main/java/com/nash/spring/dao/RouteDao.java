package com.nash.spring.dao;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Component;

import com.nash.model.Route;

@Component("RouteDao")
public class RouteDao extends BaseDao {
	public Route save(Route route){
		Session session = getSession();
		Transaction tx=null;
		try{
		
		tx = getSession().beginTransaction();
		session.save(route);
		session.flush();}
		catch(HibernateException e){
			if (tx!=null) tx.rollback();
			e.printStackTrace();
		}
		finally {
	         session.close(); 
	      }
		return route;
	} 
}
