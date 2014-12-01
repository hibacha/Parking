package com.nash.model;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Ticket {
	@Id
	@SequenceGenerator(name="TicketSequence", schema="public",sequenceName="ticket_seq", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="TicketSequence")
	private long id; 
	
	@Column(name="departure_time")
	@Temporal(TemporalType.TIME)
	private Date departureTime;
	
	@Column(name="arrival_time")
	private Calendar arrivalTime;
	
	@Column(name="fare")
	private Float fare;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public Date getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(Date departureTime) {
		this.departureTime = departureTime;
	}
	public Calendar getArrivalTime() {
		return arrivalTime;
	}
	public void setArrivalTime(Calendar arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	public float getFare() {
		return fare;
	}
	public void setFare(float fare) {
		this.fare = fare;
	}
	
}
