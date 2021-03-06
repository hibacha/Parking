package com.nash.service;

import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nash.dao.AddressDao;
import com.nash.model.Address;

@Service("addressService")
@Transactional
public class AddressServiceImpl implements AddressService{

	@Autowired
	private AddressDao addressDao;

	@Override
	public Integer createAddress(Address address) {
		return addressDao.create(address);
	}
	
	@Override
	public void deleteAddressById(Integer id){
		Address location = addressDao.read(id);
		addressDao.delete(location);
	}

	@Override
	public Address getAddress(Integer id) {
		try {
			TimeUnit.SECONDS.sleep(5);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return addressDao.read(id);
	}

	@Override
	public void updateAddress(Address location) {
		addressDao.update(location);
	}

}
