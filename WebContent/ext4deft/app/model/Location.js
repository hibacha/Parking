Ext.define("ext4deft.model.Location", {
	extend : "Ext.data.Model",
	fields : [ {
		name : "id",
		type : 'int'
	}, {
		name : "city",
		type : "string",
		mapping:'code'
	}, {
		name : 'lat',
		type : 'float',
		mapping : 'latitude'
	}, {
		name : 'lng',
		type : 'float',
		mapping : 'longitude'
	} ]
})