Ext.define('deftApp.view.myPanel',{
	extend:'Ext.panel.Panel',
	alias:'widget.myPanel',
	id:'p1',
	requires:['Ext.form.field.Date'],
	controller:'deftApp.controller.Main',
	width:300,
	height:300,
	title:'panel title',
	items:[
	   {itemId:'btn',xtype:'button',text:'Button'},
	   {xtype:'datefield'},
	   {itemId:'winContainer',
		xtype:'panel',
	    height: 200,
	    width: 400,
		layout:'fit',
		autoShow:true,
		items:[{xtype:'datepicker'}]
	   }
	],
	dockedItems: [{
	    xtype: 'toolbar',
	    dock: 'top',
	    items: [
	        { xtype: 'button', text: 'Button 1' }
	    ]
	}]
});