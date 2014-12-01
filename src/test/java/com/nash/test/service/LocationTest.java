package com.nash.test.service;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.transaction.TransactionConfiguration;

import com.nash.model.Location;
import com.nash.service.LocationService;
import com.nash.test.BaseEnvironmentTest;

@TransactionConfiguration(defaultRollback=true)
public class LocationTest extends BaseEnvironmentTest {

	@Autowired
	private LocationService service;
	
	
	@Test
	public void create(){
		Location loc = prepareLocationPOJO();
		Integer id = service.createLocation(loc);
		Location locationFromDB = service.getLocation(id);
		Assert.assertEquals(loc.getAbbreviation(), locationFromDB.getAbbreviation());
	}

	
	@Test
	public void update(){
		Location location = prepareLocationPOJO();
		Integer persistedId = service.createLocation(location);
		Location persistedLocation = service.getLocation(persistedId);
		persistedLocation.setAbbreviation("TEST");
		service.updateLocation(location);
		Location updatedLocation  = service.getLocation(persistedId);
		Assert.assertEquals("TEST", updatedLocation.getAbbreviation());
		
	}
	
	private Location prepareLocationPOJO() {
		Location loc = new Location();
		loc.setAbbreviation("PEK");
		loc.setAddress("chang an street");
		loc.setCity("Beijing");
		return loc;
	}
	
}
