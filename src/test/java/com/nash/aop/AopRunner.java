package com.nash.aop;

import java.lang.reflect.Method;

import org.springframework.aop.MethodBeforeAdvice;
import org.springframework.aop.framework.ProxyFactory;

public class AopRunner {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MyInterceptor interceptor= new MyInterceptor(new MethodBeforeAdvice() {
			
			@Override
			public void before(Method method, Object[] args, Object target)
					throws Throwable {
				    System.out.println("before"+method.getName());
				    //method.invoke(target, args);
			}
		});
		
		ProxyFactory proxy = new ProxyFactory(new AopTarget());
		proxy.addAdvice(new MethodBeforeAdvice() {
			
			@Override
			public void before(Method method, Object[] args, Object target)
					throws Throwable {
				    System.out.println("before"+method.getName());
				    //method.invoke(target, args);
			}
		});
		
	}

}
