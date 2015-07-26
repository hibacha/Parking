package com.nash.aop;

import org.springframework.aop.MethodBeforeAdvice;
import org.springframework.aop.framework.adapter.MethodBeforeAdviceInterceptor;

public class MyInterceptor extends MethodBeforeAdviceInterceptor {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public MyInterceptor(MethodBeforeAdvice advice) {
		super(advice);
		// TODO Auto-generated constructor stub
	}

}
