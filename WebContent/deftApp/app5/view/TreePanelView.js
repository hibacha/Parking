Ext.define('deft.view.TreePanelView',{
	controller:'deftApp.controller.TreePanelController',
	extend:'Ext.tree.Panel',
	alias:'widget.mytreepanel',
	title:'Tree',
	height:300,
	width:300,
	inject:["treePanelStore"],
	config:{
	  treePanelStore:null
	},
	initComponent:function(){
		this.store = this.getTreePanelStore();
	    return this.callParent(arguments);
	}
});