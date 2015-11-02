package com.nash.annotation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LongToDate {
	public enum RequestSource{
		REQUEST_PARAM,PATH_VARIABLE
	}
	RequestSource requestSource() default RequestSource.REQUEST_PARAM;
	String value();
}
