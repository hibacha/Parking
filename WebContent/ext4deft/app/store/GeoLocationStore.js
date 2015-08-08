Ext.define("ext4deft.store.GeoLocationStore",{
	extend:"Ext.data.Store",
	requires:["ext4deft.model.Location"],
	autoLoad:true,
	model:'ext4deft.model.Location',
	storeId:'geoLocationStore',
	proxy:{
	   type:'memory',
	   reader:{
		 type:'json'
	   }
	},
	data:[{id:1,code:'kk',latitude:'11',longitude:'22'},
	      {id:2,code:'bos',latitude:'11',longitude:'22'},
	      {id:3,code:'nyc',latitude:'11',longitude:'22'}
	      ]
});