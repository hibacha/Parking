package com.nash.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Executor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import com.nash.Bar;
import com.nash.exceptions.WrongDataTypeException;
import com.nash.model.Address;
import com.nash.model.Meter;
import com.nash.model.MeterAddress;
import com.nash.service.AddressService;
import com.nash.service.MeterService;



@Controller
@RequestMapping(value="/servelet")
public class SecondController {

	@Autowired
	Bar bar2;
	
	@Autowired
	ThreadPoolTaskExecutor pool;
	
	@Autowired
	AddressService addressService;
	
	@Autowired
	MeterService meterService;
	
	@RequestMapping(value="/call/{id}/{username}")
	public ModelAndView test(@PathVariable("id") String id, @PathVariable("username") String username){
		System.out.println("username:"+username);
		Integer parsedId = null;
		try {
			 parsedId = Integer.parseInt(id);
			
		} catch (Exception e) {
			throw new WrongDataTypeException();
		}
		System.out.println("id:"+parsedId);
		ModelAndView view = new ModelAndView("NewFile");
		view.addObject("att1",  "alice");
		view.addObject("names", prepareListOfName());
		return view;
	}
	
	private List<String> prepareListOfName(){
		List<String> list =Arrays.asList("alice","bob","crist");
		return list;
	}
	
	@RequestMapping(value="/throwNum")
	public void throwSomething(){
		int a,b,c;
		a=10;
		b=0;
		c=a/b;
	}
	
	@RequestMapping(value="/za")
	public void testMethod(){
		Executor test = pool;
		
		System.out.println(bar2.getName());
	}
	
	@RequestMapping(value="/meter")
	public void testMeter(){
		Address a = new Address();
		a.setAddress("36 Dartmouth");
		a.setCity("boston");
	
		Meter m = new Meter();
		m.setLatitude("1111");
		m.setLongitude("2222");
		meterService.createMeter(m);

		MeterAddress ma=new MeterAddress();
		ma.setAddress(a);
		ma.setMeter(m);
		
		a.getMeterAddress().add(ma);
		addressService.createAddress(a);

		
		
	}
	
	@ResponseStatus(value=HttpStatus.CONFLICT, reason="Data integrity violation")
	@ExceptionHandler(value=ArithmeticException.class)
	public void conflict11(){
		System.out.println("cao");
	}
}
