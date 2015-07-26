package com.nash.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nash.model.Meter;
import com.nash.service.MeterService;

@Controller
@RequestMapping(value="/meter")
public class MeterConfigurationController {
	
	@Autowired
	private MeterService meterService;
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public void addMeter(@RequestBody Meter meter){
		meterService.createMeter(meter);
	}
	
	@RequestMapping(value="/fetch", method=  RequestMethod.GET)
	public @ResponseBody List<Meter> retriveAll(){
		return meterService.retriveAllMeter();
	}
	@RequestMapping(value="/fetch/{id}",method=RequestMethod.GET)
	public @ResponseBody Meter getMeter(@PathVariable("id") Integer meterId){
		return meterService.getMeter(meterId);
	}
	
	@RequestMapping(value="/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteMeter(@PathVariable("id") Integer meterId){
		meterService.deleteMeterById(meterId);
		return new ResponseEntity<String>("{'status':'success','comment':'n/a'}",HttpStatus.OK);
	}
	
	@RequestMapping(value="/update", method = RequestMethod.PUT)
	public ResponseEntity<String> updateMeter(@RequestBody Meter updatedMeter){
		meterService.updateMeter(updatedMeter);
		return new ResponseEntity<String>("{}",HttpStatus.OK);
	}
	
	
}
