package com.nash.test.service;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.transaction.TransactionConfiguration;

import com.nash.model.Address;
import com.nash.service.AddressService;
import com.nash.test.BaseEnvironmentTest;

@TransactionConfiguration(defaultRollback=true)
public class LocationTest extends BaseEnvironmentTest {

	@Autowired
	private AddressService service;
	
	
	@Test
	public void create(){
		Address loc = prepareLocationPOJO();
		Integer id = service.createAddress(loc);
		Address locationFromDB = service.getAddress(id);
		Assert.assertEquals(loc.getAbbreviation(), locationFromDB.getAbbreviation());
	}

	
	@Test
	public void update(){
		Address location = prepareLocationPOJO();
		Integer persistedId = service.createAddress(location);
		Address persistedLocation = service.getAddress(persistedId);
		persistedLocation.setAbbreviation("TEST");
		service.updateAddress(location);
		Address updatedLocation  = service.getAddress(persistedId);
		Assert.assertEquals("TEST", updatedLocation.getAbbreviation());
		
	}
	
	private Address prepareLocationPOJO() {
		Address loc = new Address();
		loc.setAbbreviation("PEK");
		loc.setAddress("chang an street");
		loc.setCity("Beijing");
		return loc;
	}
	
}
