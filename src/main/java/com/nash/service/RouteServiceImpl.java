package com.nash.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nash.dao.LocationDao;
import com.nash.dao.RouteDao;
import com.nash.model.Location;
import com.nash.model.Route;

@Service("routeService")
@Transactional
public class RouteServiceImpl implements RouteService {

	@Autowired
	private RouteDao routeDao;
	@Autowired
	private LocationDao locationDao;
	
	@Override
	public Integer save(Route route) {
		return routeDao.create(route);
	}

	@Override
	public void removeById(Integer id){
		Route bos2nyc = routeDao.read(id);
		routeDao.delete(bos2nyc);
	}
	
	@Override
	public void testAMethod(){
		Location newloc= locationDao.read(65);
		Route r = routeDao.read(23);
		r.setPickUp(newloc);
	}
}
