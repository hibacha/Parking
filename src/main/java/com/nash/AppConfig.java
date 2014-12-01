package com.nash;

import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class AppConfig {

	@Bean
	@Scope(BeanDefinition.SCOPE_PROTOTYPE)
	public Bar createBar(){
		return new Bar("my name is bar"); 
	}
	
}
