package com.nash.model;

import javax.persistence.AssociationOverride;
import javax.persistence.AssociationOverrides;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "METER_ADDRESS")
@AssociationOverrides({
		@AssociationOverride(name = "pk.meter", joinColumns = @JoinColumn(name = "METER_ID")),
		@AssociationOverride(name = "pk.address", joinColumns = @JoinColumn(name = "ADDRESS_ID")) })
public class MeterAddress implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8962983726678650134L;
	@EmbeddedId
	private MeterAddressId pk = new MeterAddressId();
	
	public MeterAddressId getPk() {
		return pk;
	}

	public void setPk(MeterAddressId pk) {
		this.pk = pk;
	}

	@Transient
	public Address getAddress() {
		return pk.getAddress();
	}

	public void setAddress(Address address) {
		pk.setAddress(address);
	}

	@Transient
	public Meter getMeter() {
		return pk.getMeter();
	}

	public void setMeter(Meter meter) {
		pk.setMeter(meter);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((pk == null) ? 0 : pk.hashCode());
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
		MeterAddress other = (MeterAddress) obj;
		if (pk == null) {
			if (other.pk != null)
				return false;
		} else if (!pk.equals(other.pk))
			return false;
		return true;
	}
}
