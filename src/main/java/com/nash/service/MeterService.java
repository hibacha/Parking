package com.nash.service;

import com.nash.model.Meter;

public interface  MeterService {
	public Integer createMeter(Meter location);
	public void deleteMeterById(Integer id);
	public Meter getMeter(Integer id);
	public void updateMeter(Meter location);
}
