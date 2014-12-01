Ext.define('deftApp.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
		'deftApp.view.myPanel',
		'deftApp.view.TreePanelView'
    ],
	
    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
		collapsible: true,
        title: 'west',
        width: 350,
		items:[{xtype:'mytreepanel'}]
    },{
		region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Center Tab 1',
			items:[{xtype:'myPanel'}
				
			]
        }]
    }]
});