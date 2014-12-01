package com.nash.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nash.Bar;
import com.nash.model.Location;
import com.nash.service.LocationService;
import com.nash.service.RouteService;

@Controller
@RequestMapping("/subdir1")
public class FirstController {
	@Autowired
	LocationService locationService;
	
	@Autowired
	RouteService routeService;
	
	@Autowired
	Bar bar;
	
	@RequestMapping(value="/*")
	public String  testRequest2(){
		System.out.println("ccccc");
		return "NewFile";
	}
	
	@RequestMapping(value="/zao/ka")
	public String testRequest3(){
		System.out.println("/zao/ka");
		routeService.testAMethod();
		System.out.println(bar.getName());
		return "test";
	}
	
	@RequestMapping(value="/jackson")
	public @ResponseBody Location covertPojoToJson(){
		Location loc = new Location();
		System.out.println("jackson");
		loc.setAbbreviation("NYC");
		return loc;
	}
}
