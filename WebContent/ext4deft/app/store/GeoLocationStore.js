Ext.define("ext4deft.store.GeoLocationStore",{
	extend:"Ext.data.Store",
	requires:["ext4deft.model.Location"],
	model:'ext4deft.model.Location',
	storeId:'geoLocationStore',
	proxy:{
	   type:'memory',
	   reader:{
		 type:'json'
	   }
	}
//	proxy:{
//		type:'rest',
//		url:'/Parking/meter/fetch',
//		reader:{
//			type:'json'
//		}
//	}
	
});