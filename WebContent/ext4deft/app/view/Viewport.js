Ext.define('ext4deft.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'ext4deft.view.MapContainer',
        'ext4deft.view.ActionFormContainer',
        'ext4deft.view.InfoDetailPanel',
        'Ext.layout.container.Border'
    ],

    layout: {
        type: 'border',
        padding: 5
    },

    items: [{
    	region:'center',
    	width:"70%",
    	xtype:"panel",
    	title:"center",
    	items:[{xtype:"mapContainer"}]
    },{
    	region:'east',
    	width:"30%",
    	xtype:'actionFormContainer',
    	split:true,
    	collapsible: true,
    	title:"east"
    	
    },{
        region:'south',
        width:'100%',
        height:'25%',
        xtype:'infoDetailPanel'

    }]
});
