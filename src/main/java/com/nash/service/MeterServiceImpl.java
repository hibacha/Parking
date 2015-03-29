package com.nash.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nash.dao.MeterDao;
import com.nash.model.Meter;
@Service("meterService")
@Transactional
public class MeterServiceImpl implements MeterService {

	@Autowired
	MeterDao meterDao;
	
	@Override
	public Integer createMeter(Meter location) {
		// TODO Auto-generated method stub
		return meterDao.create(location);
	}

	@Override
	public void deleteMeterById(Integer id) {
		// TODO Auto-generated method stub

	}

	@Override
	public Meter getMeter(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateMeter(Meter location) {
		// TODO Auto-generated method stub

	}

}
