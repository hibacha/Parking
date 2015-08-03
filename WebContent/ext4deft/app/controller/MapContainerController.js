Ext.define("ext4deft.controller.MapContainerController", {
	extend : "Deft.mvc.ViewController",
	inject : [ "locationStore", "googleMapContext" ],
	config : {
		locationStore : null,
		googleMapContext : null
	},
	observe : {
		googleMapContext : {
			sycMap : "onSycMap"
		}
	},
	control : {
		view : {
			boxready : "loadInitialData"
		},
		mycanvas : {
			boxready : "afterCreate"
		}
	},
	init : function() {
		return this.callParent(arguments);
	},
	loadInitialData : function() {

	},
	onSelect : function() {
		alert('select');
	},
	afterCreate : function() {
		var me = this;
		var mapOptions = {
			center : {
				lat : -34.397,
				lng : 150.644
			},
			zoom : 10
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'),
				mapOptions);
		google.maps.event.addListener(map,'click',function(mouseEvent){
				var latLng = mouseEvent.latLng;
				me.getGoogleMapContext().changePin(latLng);
		});
		me.getGoogleMapContext().sycMap(map);
	},
	onSycMap : function(map) {

	}
});