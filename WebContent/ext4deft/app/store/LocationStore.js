Ext.define("ext4deft.store.LocationStore",{
	extend:"Ext.data.Store",
	requires:["ext4deft.model.Location"],
	autoLoad:true,
	model:'ext4deft.model.Location',
	pageSize:50,
	proxy:{
		type:"ajax",
		url:'/Parking/meter/fetch',
		reader:{
			type:'json'
		},
		enablePaging:true
	},
	sorters:[{
            property:'city',
            direction: 'DESC'
    }],
	storeId:'locationStore'
	
	

});