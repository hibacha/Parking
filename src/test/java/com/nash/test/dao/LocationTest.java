package com.nash.test.dao;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.nash.dao.LocationDao;
import com.nash.test.BaseEnvironmentTest;

public class LocationTest extends BaseEnvironmentTest {
	@Autowired
	private LocationDao dao;
	
	@Test
	public void testDao(){
		Assert.assertNotNull(dao);
	}
}
