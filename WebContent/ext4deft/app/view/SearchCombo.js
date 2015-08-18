Ext.define('ext4deft.view.SearchCombo', {
	extend : 'Ext.form.field.ComboBox',
	inject:["geoLocationStore"],
	config:{
		geoLocationStore:null
	},
	controller:'ext4deft.controller.SearchComboController',
	fieldLabel:'Search Address',
	displayField:'city',
	valueField:'id',
	margin:'10 0 0 10',
	width:350,
	alias:'widget.searchCombo',
	itemId:'searchCombo',
	id:'searchCombo',
	enableKeyEvents:true,
	queryMode:'local',
	hideTrigger:true,
	initComponent : function() {
		Ext.apply(this,{
			store:this.getGeoLocationStore()
		});
		this.store.load({
		    scope: this,
		    callback: function(records, operation, success) {
		       this.expand();
		    }
		});
		return this.callParent(arguments);
	},
	listConfig:{
		getInnerTpl: function(){
			return '{city}'+'<div style="color:grey">{address}</div>'
		}
	}
});