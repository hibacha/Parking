package com.nash.dao;

import org.springframework.stereotype.Repository;

import com.nash.model.Address;


@Repository
public interface AddressDao extends GenericDao<Address, Integer>{
}
