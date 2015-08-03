Ext.define("ext4deft.view.InfoDetailPanel",{
	extend:"Ext.panel.Panel",
	alias:"widget.infoDetailPanel",
	inject:["googleMapContext"],
	config:{
		googleMapContext: null
	},
	requires:['ext4deft.view.LocationGridPanel'],
	controller:"ext4deft.controller.InfoDetailPanelController",
	constructor : function(config){
        this.initConfig(config);
        return this.callParent(arguments);
    },
	initComponent: function(){
		this.callParent(arguments);
	},
	title:'Search',

	width:'100%',
	height:'100%',
	items:[
		{xtype:'container',
		layout:'vbox',
		items:[
			{xtype:'textfield',id:'searchBoxHtml', enableKeyEvents:true,itemId:'searchText',fieldLabel: 'Address',labelAlign:'right',margin:'5 0 0 0',width:300,emptyText:'input you address '},
			{xtype:'locationGrid',itemId:'resultPanel'}
		]}

	]


});