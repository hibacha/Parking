package com.nash.service;

import com.nash.model.Address;

public interface AddressService {
	public Integer createAddress(Address address);
	public void deleteAddressById(Integer id);
	public Address getAddress(Integer id);
	public void updateAddress(Address address);
}
