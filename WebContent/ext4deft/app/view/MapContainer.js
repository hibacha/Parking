Ext.define("ext4deft.view.MapContainer", {
    controller: "ext4deft.controller.MapContainerController",
    extend: "Ext.container.Container",
    alias: 'widget.mapContainer',
    inject: ["locationStore"],
    requires: ["Ext.form.field.Date", "ext4deft.controller.MapContainerController"],
    layout:"vbox",
    title: "Map",
    config: {
        locationSotre: null
    },
    items: [{
        xtype: 'container',
        height:50

        
    }, {
        xtype: 'component',
        itemId:'mycanvas',
        id:'map-canvas',
        width:500,
        height:500,
        autoEl: {
            tag: 'div'
        }
    }]

})