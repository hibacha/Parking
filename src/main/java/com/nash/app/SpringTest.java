package com.nash.app;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringTest {

	/**
	 * @param args
	 */
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext ctx = new ClassPathXmlApplicationContext(new String[]{"spring-config.xml"});
		//TicketService service = (TicketService)ctx.getBean("TicSvc");
		/*
		 
		 * */
//		
//		Location nyc = new Location();
//		nyc.setAbbreviation("NYC");
//		nyc.setAddress("baba,Manhanttan");
//		
//		Location bos = new Location();
//		bos.setAbbreviation("BOS");
//		bos.setAddress("SOUTH STATION");
	
		
//
//		service.save(nyc);
//		service.save(bos);
		
//		Route bos2nyc= new Route();
//		bos2nyc.setPickUp(bos);
//		bos2nyc.setDropOff(nyc);
	
//		service.save(bos);
		
		
//		LocationService locationService = (LocationService)ctx.getBean("locationService");
//		//locationService.createLocation(bos);
//		RouteService routeService = (RouteService)ctx.getBean("routeService");
//		routeService.save(bos2nyc);
		//routeService.removeById(20);
//		locationService.createLocation(nyc);
//		System.out.println(nyc.getId());
//		locationService.deleteLocationById(nyc.getId());
		
//		LocationDao locationDao = (LocationDao)ctx.getBean("locationDao");
//		((IExtraMixin)locationDao).doSomething();
//		((IExtraMixin1)locationDao).doSomething1();
//		Location loc= locationDao.read(id);
	//	System.out.println(loc.getAbbreviation());

		//List<Location> result = locationDao.findByAbbreviation("NYC");
		//System.out.println(result.size());
		
	//	((IExtraMixin)locationDao).doSomething();

//		bos2nyc.setDropOff(nyc);
//		bos2nyc.setPickUp(bos);
//		
//		service.save(bos2nyc);
		
//		Ticket tix = new Ticket();
//		Date now = new Date();
//		Calendar cal = Calendar.getInstance();
//		cal.setTime(now);
//		tix.setArrivalTime(cal);
//		
//		
//		tix.setDepartureTime(createTimeWithTimeZone());
//		
//		System.out.println(TimeZone.getDefault());
//		service.push(tix);
		
//		Calendar cal  =Calendar.getInstance(TimeZone.getTimeZone("America/Los_Angeles"));
//		System.out.println(cal.getTimeZone());
//		System.out.print(cal.getTime());
		
		//createTimeWithTimeZone();
		
		
		
		
	}
	
	public static Date createTimeWithTimeZone(){
		Calendar cal = Calendar.getInstance();
		System.out.println("now:"+cal.getTime());
		System.out.println("now:"+cal.getTimeZone());
		cal.set(2014, Calendar.JULY, 8, 9, 0, 0);
		cal.setTimeZone(TimeZone.getTimeZone("GMT"));
		System.out.println("hour of the day :"+cal.get(Calendar.HOUR_OF_DAY));
	
		TimeZone us_east = TimeZone.getTimeZone("US/Eastern");
		TimeZone gmt = TimeZone.getTimeZone("GMT");
		int offSet  =  us_east.getOffset(cal.getTimeInMillis());
		System.out.println("GMT-4 offSet:"+offSet);
		
		DateFormat simpleDateFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss zzzz");
		simpleDateFormatter.setTimeZone(gmt);
		System.out.println(simpleDateFormatter.format(cal.getTime()));;
		
		System.out.println(cal.getTimeZone());
		
		cal.set(2014, Calendar.NOVEMBER, 8, 8, 0, 0);
		offSet  =  us_east.getOffset(cal.getTimeInMillis());
		System.out.println("GMT-5 offSet:"+offSet);
		
		
		
//		TimeZone asia = TimeZone.getTimeZone("GMT+8");
//		System.out.println("raw:"+asia.getRawOffset());
		
	
		System.out.println(cal.getTime());
		System.out.println(cal.getTimeZone());
		return cal.getTime();
		
	}

}
