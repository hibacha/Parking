Ext.define('ext4deft.context.GoogleMapContext', {
    mixins: {
        observable: "Ext.util.Observable"
    },
    config: {
        map: null,
        marker:null
    },
    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.mixins.observable.constructor.call(this);
        this.initConfig(config);
        this.callParent(arguments);
        this.addEvents('changePin');
        this.addEvents('loadSearchResults');
        return this.addEvents("sycMap");
    },
    sycMap:function(map){
    	this.map = map;
    	this.fireEvent('sycMap',map);
    },
    changePin:function(latLng){
    	this.fireEvent('changePin',latLng);
    },
    loadSearchResults:function(results){
        this.fireEvent('loadSearchResults',results);
    }

});