package com.nash.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
public class Route {
	@Id
	@SequenceGenerator(name="RouteSequence", schema="public",sequenceName="route_seq", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="RouteSequence")
	private Integer id;
	
	@ManyToOne()
	@Cascade(CascadeType.ALL)
	@JoinColumn(name="PICKUP")
	private Location pickUp;
	
	@ManyToOne
	@Cascade(CascadeType.SAVE_UPDATE)
	@JoinColumn(name="DROPOFF")
	private Location dropOff;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public Location getPickUp() {
		return pickUp;
	}
	public void setPickUp(Location pickUp) {
		this.pickUp = pickUp;
	}
	
	public Location getDropOff() {
		return dropOff;
	}
	public void setDropOff(Location dropOff) {
		this.dropOff = dropOff;
	}
	
}
