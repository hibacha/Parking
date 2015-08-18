Ext.define('ext4deft.controller.InfoDetailPanelController',{
	extend:'Deft.mvc.ViewController',
	inject:['googleMapContext'],
	config:{
		googleMapContext:null
	},
	control:{
		view:{
			
		},
		searchText:{
			keypress:{fn:'onKeyPress',buffer:1500},
			boxready:'onBoxready'
		}
	},
	onKeyPress:function(){
		var me = this;
		var address = me.getSearchText().getValue();
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({'address':address}, function(results, status){
			if(status == google.maps.GeocoderStatus.OK){
			   me.getGoogleMapContext().loadSearchResults(results);
			}
		});

	},
	onBoxready:function(){
	
	}
});