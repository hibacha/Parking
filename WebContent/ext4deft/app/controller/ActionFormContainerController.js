Ext.define('ext4deft.controller.ActionFormContainerController',{
	extend:'Deft.mvc.ViewController',
	inject:["googleMapContext"],
	config:{
		googleMapContext:null
	},
	control:{
		zoomIn:{
			click:'onZoomInClick'
		},
		zoomOut:{
			click:'onZoomOutClick'
		},
		latField:true,
		lngField:true
	},
	observe:{
		googleMapContext:{
			changePin:'onPinChange'
		}
	},
	onZoomInClick:function(){
		var me = this;
		var map = me.getGoogleMapContext().getMap();
		var currentZoom = map.getZoom();
		map.setZoom(++currentZoom);
	},
	onZoomOutClick:function(){
		var me = this;
		var map = me.getGoogleMapContext().getMap();
		var currentZoom = map.getZoom();
		map.setZoom(--currentZoom);
	},
	onPinChange:function(latLng){
		var me = this;
		me.getLatField().setLoading(true);
		me.getLatField().setValue(latLng.lat());
		me.getLatField().setLoading(false);
		me.getLngField().setValue(latLng.lng());
	}
});