package com.nash;

public class Bar {
	private String name;
	private int i=0;
	public Bar(){
		this.name ="default";
	}
	public Bar(String name) {
		this.name = name;
	}

	public String getName() {
		return name+i++;
	}

	public void setName(String name) {
		this.name = name;
	}

}
