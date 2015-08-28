Ext.define('ext4deft.controller.SearchComboController', {
	extend : 'Deft.mvc.ViewController',
	control : {
		view : {
			keyup : {
				fn : 'onKeyPress',
				buffer : 500
			},
			select : 'onSelect'
		}
	},
	inject : [ "googleMapContext", "geoLocationStore", "googleMapContext"],
	config : {
		googleMapContext : null,
		geoLocationStore : null,
		googleMapContext :null
	},
	observe : {
		googleMapContext : {
			loadSearchResults : 'onLoadSearchResults'
		},
		geoLocationStore : {
			load : function() {
				alert('cccc')
			}
		}
	},
	onSelect : function(combo, records, eOpts) {
		var me = this;
		var placeId = records[0].get("placeId");
		var lat = records[0].get('lat');
		var lng = records[0].get('lng');
		var city = records[0].get('city');
		var latLng = new google.maps.LatLng(lat, lng, false);
		me.saveMarker(latLng,city);
	},
	saveMarker : function(myLatLng, title) {
		var me = this;
		var _map = me.getGoogleMapContext().getMap();
		var _marker = me.getGoogleMapContext().getMarker();
		if (_marker === null) {
			me.createNewMarker(myLatLng, _map, title);
		} else {
			_marker.setMap(null);
			_marker.setPosition(myLatLng);
			_marker.setMap(_map);

		}
		_map.setCenter(myLatLng);
		_map.setZoom(12);
	},
	createNewMarker : function(myLatLng, map, title) {
		var me = this;
		var _marker = new google.maps.Marker({
			position : myLatLng,
			map : map,
			title : title
		});
		me.getGoogleMapContext().setMarker(_marker);
	},
	onKeyPress : function() {
		var me = this;
		var address = me.getView().getValue();
		var geocoder = new google.maps.Geocoder();
		if (address == null) {
			me.clearComboBox();
		}
		geocoder.geocode({
			'address' : address
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				me.getGoogleMapContext().loadSearchResults(results);
			}
		});
	},
	clearComboBox : function() {
		var me = this;
		me.getGeoLocationStore().removeAll();
		me.getView().collapse();
	},
	onLoadSearchResults : function(results) {
		var me = this;
		me.getGeoLocationStore().removeAll();
		Ext.Array.each(results, function(rec) {
			var cityName = rec.address_components[0].short_name;
			var lat = rec.geometry.location.lat();
			var lng = rec.geometry.location.lng();
			var formatted_address = rec.formatted_address;
			var placeId = rec.place_id;
			me.getGeoLocationStore().add({
				'city' : cityName,
				'lat' : lat,
				'lng' : lng,
				'address' : formatted_address,
				'placeId' : placeId
			});
		});

		me.getView().expand();
	}
});