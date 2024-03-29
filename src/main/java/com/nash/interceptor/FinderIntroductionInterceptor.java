package com.nash.interceptor;

import java.lang.reflect.Method;

import org.aopalliance.intercept.MethodInvocation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.aop.IntroductionInterceptor;

import com.nash.finder.FinderExecutor;
import com.nash.finder.JoinExecutor;



public class FinderIntroductionInterceptor implements IntroductionInterceptor, IExtraMixin, IExtraMixin1{
	
	static final Logger logger=LoggerFactory.getLogger(FinderIntroductionInterceptor.class);

	@Override
	public Object invoke(MethodInvocation methodInvocation) throws Throwable {
		Method method = methodInvocation.getMethod();
		logger.info("caller:"+method.getDeclaringClass());
		Object[] args = methodInvocation.getArguments();
		String methodName = method.getName();
		
		if(implementsInterface(method.getDeclaringClass())){
			return method.invoke(this, methodInvocation.getArguments());
		}
		if(methodName.startsWith("find")){
			FinderExecutor genericDaoImpl = (FinderExecutor)methodInvocation.getThis();
			return genericDaoImpl.executeFinder(method,args );
		}else if(methodName.startsWith("sql")){
			JoinExecutor immpl = (JoinExecutor)methodInvocation.getThis();
			return immpl.joinObject(method, args);
		}
		return methodInvocation.proceed();
	}

	@Override
	public boolean implementsInterface(Class<?> intf) {
		return 		intf.isInterface()
				&& (intf.isAssignableFrom(IExtraMixin.class) || intf.isAssignableFrom(IExtraMixin1.class));
	}

	@Override
	public void doSomething() {
		logger.info("DOING SOMETHING!!");
	}

	@Override
	public void doSomething1() {
		logger.info("DOING SOMETHING11111!!");
	}

}
