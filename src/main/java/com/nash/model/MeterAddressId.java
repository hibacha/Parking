package com.nash.model;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;

@Embeddable
public class MeterAddressId  implements java.io.Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -5984956938673258458L;
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((address == null) ? 0 : address.hashCode());
		result = prime * result + ((meter == null) ? 0 : meter.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MeterAddressId other = (MeterAddressId) obj;
		if (address == null) {
			if (other.address != null)
				return false;
		} else if (!address.equals(other.address))
			return false;
		if (meter == null) {
			if (other.meter != null)
				return false;
		} else if (!meter.equals(other.meter))
			return false;
		return true;
	}


	@ManyToOne(cascade=CascadeType.ALL)
	private Meter meter;
	@ManyToOne(cascade=CascadeType.ALL)
	private Address address;
	
	
	public Meter getMeter(){
		return meter;
	}
	
	public void setMeter(Meter meter) {
		this.meter = meter;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	
	public Address getAddress(){
		return address;
	}
}
