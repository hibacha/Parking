Ext.define('ext4deft.Application', {
 	extend: "Deft.mvc.Application",
    name: 'ext4deft',

   // extend: 'Ext.app.Application',
    requires: ["ext4deft.store.GeoLocationStore","ext4deft.context.GoogleMapContext","Deft.mixin.Controllable","Deft.mixin.Injectable","ext4deft.view.Viewport","ext4deft.store.LocationStore"],
 	init: function() {

    // Configure the DeftJS IoC container
	Deft.Injector.configure({
      locationStore: "ext4deft.store.LocationStore",
      googleMapContext:"ext4deft.context.GoogleMapContext",
      geoLocationStore:"ext4deft.store.GeoLocationStore"
    });

    // Set up QuickTips and create the Viewport
    Ext.tip.QuickTipManager.init();
    Ext.create( "ext4deft.view.Viewport" );
  }
    
});
