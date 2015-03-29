package com.nash.service;

import com.nash.model.Address;

public interface AddressService {
	public Integer createLocation(Address location);
	public void deleteLocationById(Integer id);
	public Address getLocation(Integer id);
	public void updateLocation(Address location);
}
