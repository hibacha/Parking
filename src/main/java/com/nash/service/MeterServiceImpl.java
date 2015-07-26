package com.nash.service;

import java.util.List;

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
	public Integer createMeter(Meter meter) {
		return meterDao.create(meter);
	}

	@Override
	public void deleteMeterById(Integer id) {
		meterDao.delete(meterDao.read(id));
	}

	@Override
	public Meter getMeter(Integer id) {
		return meterDao.read(id);
	}

	@Override
	public void updateMeter(Meter meter) {
		meterDao.update(meter);
	}

	@Override
	public List<Meter> retriveAllMeter() {
		return meterDao.retriveAll(Meter.class);
	}

}
