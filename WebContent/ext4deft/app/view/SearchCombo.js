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
	queryMode:'local',
	typeAhead:true,
	typeAheadDelay:500,
	hideTrigger:true,
	initComponent : function() {
		Ext.apply(this,{
			store:this.getGeoLocationStore()
		});
		return this.callParent(arguments);
	},
	listConfig:{
		getInnerTpl: function(){
			return '<h3>{city}</h3>'+'<div>latitude:{lat}--longitude:{lng}</div>'
		}
	}
});