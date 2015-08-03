Ext.define("ext4deft.controller.LocationGridController", {
  extend: "Deft.mvc.ViewController",
  inject: ["locationStore","googleMapContext"],
  config: {
    locationStore: null,
    googleMapContext:null
  },
  observe:{
    googleMapContext:{
       loadSearchResults:'onLoadSearchResults'
    }
  },
  init: function() {
    this.callParent(arguments);
  },
  control:{
  	view:{
  		boxready:function(){},
  		cellclick:'onCellclick'
  	}
  },
  onCellclick:function(_this, td, cellIndex, record, tr, rowIndex, e, eOpts ){
  	var me = this;
  	var _lat = record.get("lat");
  	var _lng = record.get("lng");
    var _city = record.get("city");
    var _latLng =  new google.maps.LatLng(_lat,_lng,false);
    me.saveMarker(_latLng,_city);
  },
  saveMarker:function(myLatLng, city){
  	var me = this;
  	var _map = me.getGoogleMapContext().getMap();
  	var _marker = me.getGoogleMapContext().getMarker();
  	if(_marker === null){
     me.createNewMarker(myLatLng, _map, city);
   }else{
    _marker.setMap(null);
    _marker.setPosition(myLatLng);
    _marker.setMap(_map);

    }
    _map.setCenter(myLatLng);
  },
  createNewMarker:function(myLatLng, map, city){
    var me = this;
    var _marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: city
    });
    me.getGoogleMapContext().setMarker(_marker);
  },
  onLoadSearchResults:function(results){
    var me=this;
    me.getLocationStore().removeAll();
     Ext.Array.each(results, function(rec) {
          var cityName = rec.address_components[0].short_name;
          var lat = rec.geometry.location.lat();
          var lng = rec.geometry.location.lng();
          me.getLocationStore().add({'city':cityName,'lat':lat,'lng':lng});
     });
  }

});