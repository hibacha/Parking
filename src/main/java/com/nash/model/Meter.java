package com.nash.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
public class Meter implements java.io.Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -4486834629551945974L;

	@Id
	@SequenceGenerator(name = "MeterSequence", schema = "public", sequenceName = "METER_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MeterSequence")
	private Integer id;

	private String code;

	private String latitude;

	private String longitude;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public void setMeterAddress(Set<MeterAddress> meterAddress) {
		this.meterAddress = meterAddress;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "pk.meter")
	@Cascade({ CascadeType.SAVE_UPDATE })
	private Set<MeterAddress> meterAddress = new HashSet<MeterAddress>();

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		Meter other = (Meter) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	public Set<MeterAddress> getMeterAddress() {
		return this.meterAddress;
	}

}
