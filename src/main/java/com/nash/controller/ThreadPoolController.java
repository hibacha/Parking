package com.nash.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nash.annotation.LongToDate;
import com.nash.annotation.LongToDate.RequestSource;

@Controller
@RequestMapping("meter")
public class ThreadPoolController {

	@Autowired
	private ThreadPoolTaskExecutor pool;

	@Autowired
	private ExecutorService executorService;

	Callable<Integer> task1 = () -> {
		try {
			TimeUnit.SECONDS.sleep(1);
			return 111;
		} catch (InterruptedException e) {
			throw new IllegalStateException("task interrupted", e);
		}
	};

	Callable<Integer> task2 = () -> {
		try {
			TimeUnit.SECONDS.sleep(4);
			return 222;
		} catch (InterruptedException e) {
			throw new IllegalStateException("task interrupted", e);
		}
	};

//	@RequestMapping(value = "thread/{num}", method = RequestMethod.GET)
//	public @ResponseBody Object test(@PathVariable("num") Integer num)
//			throws InterruptedException, ExecutionException {
//
//		Callable<Integer> task1 = () -> {
//			try {
//				TimeUnit.SECONDS.sleep(num);
//				return 123;
//			} catch (InterruptedException e) {
//				throw new IllegalStateException("task interrupted", e);
//			}
//		};
//		List<Callable<Integer>> list = Arrays.asList(task1, task2);
//		Integer firstEnd = executorService.invokeAny(list);
//		return firstEnd;
//
//	}

	@RequestMapping(value = "/thread/dir/{dueDate}/{ts}", method = RequestMethod.GET)
	public @ResponseBody Object test(@LongToDate(value = "dueDate",requestSource=RequestSource.PATH_VARIABLE) Date dueDate, @LongToDate(value="endDate", requestSource=RequestSource.REQUEST_PARAM) Date endDate )
			throws InterruptedException, ExecutionException {

//		Future<Integer> future1 = pool.submit(task1);
//		Future<Integer> future2 = pool.submit(task2);
		
		Map<String,String> map = new HashMap<String, String>();
		map.put("dueDate", dueDate.toGMTString());
		map.put("endDate", endDate.toString());
		return map;
	}
}
