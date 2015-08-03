Ext.define("ext4deft.view.LocationGridPanel",{
	extend: 'Ext.grid.Panel',
	alias:'widget.locationGrid',
	inject:["locationStore"],
	requires:["Ext.util.Point"],
	config:{
		locationStore:null
	},
    padding:'5 5 5 5',
	controller:"ext4deft.controller.LocationGridController",
	constructor : function(config){
        this.initConfig(config);
        return this.callParent(arguments);
    },
    width: '100%',
    height: 150,
    title: 'Address Search Result',
    autoScroll:true,
    initComponent: function(){
    	Ext.apply(this,{
    		store:this.locationStore,
    		columns:[{
    			text:"Id",
    			dataIndex:"id",
    			width:35
    		},{
    			text:'City',
    			sortable : true,
    			dataIndex:'city',
    			flex:1
    		}
    		
    		]
    	});
    	this.callParent(arguments);
    }
});