Ext.define("ext4deft.view.MapContainer", {
	controller : "ext4deft.controller.MapContainerController",
	extend : "Ext.container.Container",
	alias : 'widget.mapContainer',
	inject : [ "locationStore" ],
	requires : [ "Ext.form.field.Date",
			"ext4deft.controller.MapContainerController",
			"ext4deft.view.SearchCombo" ],
	layout : "vbox",
	title : "Map",
	config : {
		locationSotre : null
	},
	items : [ {
		xtype : 'container',
		height : 50,
		layout: 'hbox',
		items : [ {
			xtype : 'searchCombo'
		},{
			xtype: 'button',
			text:'+',
			itemId:'addWayPointButton',
			margin:'10 0 0 10'
		} ]

	}, {
		xtype : 'container',
		layout : 'hbox',
		items : [ {
			xtype : 'component',
			itemId : 'mycanvas',
			id : 'map-canvas',
			width : 500,
			height : 500,
			autoEl : {
				tag : 'div'
			}
		},{
			xtype:'container',
			width:75
		},{
			xtype:'container',
			itemId:'wayPointContainer',
			width:400,
			layout:'vbox',
			items:[]
		} ]
	} ]
})