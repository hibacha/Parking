package com.nash.service;

import java.util.List;

import com.nash.model.Meter;

public interface  MeterService {
	public Integer createMeter(Meter meter);
	public void deleteMeterById(Integer id);
	public Meter getMeter(Integer id);
	public void updateMeter(Meter meter);
	public List<Meter> retriveAllMeter();
		
}
