Ext.define('ext4deft.controller.SearchComboController', {
	extend : 'Deft.mvc.ViewController',
	control : {
		view : {
			keyup : {
				fn : 'onKeyPress',
				buffer : 500
			},

		}
	},
	inject : [ "googleMapContext", "geoLocationStore" ],
	config : {
		googleMapContext : null,
		geoLocationStore : null
	},
	observe : {
		googleMapContext : {
			loadSearchResults : 'onLoadSearchResults'
		},
		geoLocationStore:{
			load:function(){alert('cccc')}
		}
	},
	onKeyPress : function() {
		console.log('keyup');
		var me = this;
		var address = me.getView().getValue();
		console.log('|'+address+'|');
		var geocoder = new google.maps.Geocoder();
		if(address == null){
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
	clearComboBox:function(){
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
			me.getGeoLocationStore().add({
				'city' : cityName,
				'lat' : lat,
				'lng' : lng,
				'address': formatted_address
			});
		});
		
		me.getView().expand();
	}
});