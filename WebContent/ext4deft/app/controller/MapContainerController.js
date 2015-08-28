Ext.define("ext4deft.controller.MapContainerController", {
	extend : "Deft.mvc.ViewController",
	inject : [ "locationStore", "googleMapContext" ],
	requires:['Ext.form.Label'],
	config : {
		locationStore : null,
		googleMapContext : null
	},
	observe : {
		googleMapContext : {
		}
	},
	control : {
		view : {
		},
		mycanvas : {
			boxready : "afterCreate"
		},
		addWayPointButton: {
			click:'onAddWayPoint'
		}
	},
	init : function() {
		return this.callParent(arguments);
	},
	onAddWayPoint: function(){
		var container = this.getView().query('#wayPointContainer')[0];
		var currentSize = container.items.length;
		container.items.insert(currentSize,Ext.create('ext4deft.view.SearchCombo',{itemId:'searchCombo'+currentSize}));
		container.doLayout();
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
	}
});