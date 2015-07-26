package com.nash.task;

import java.util.concurrent.Callable;

public class Sum implements Callable<Integer> {

	private int n;
	public Sum(int n){
		this.n = n;
	}
	@Override
	public Integer call() throws Exception {
		return ((1+n)*n)/2;
	}

}
