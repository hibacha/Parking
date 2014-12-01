Ext.define('deftApp.controller.TreePanelController',{
	extend: "Deft.mvc.ViewController",
	inject:['treePanelStore','eventBus'],
	config:{eventBus:null},
	observe:{
	  eventBus:{
			test:'onTest'
	  },
	},
	control:{

	  view:{
	  	boxready:'onboxready',
		afterItemExpand:'onAfteritemexpand'
	  }
	},
	onTest:function(){
		//setTimeout(function(){console.log('test');},3000);
		Ext.log({dump:arguments});
		//for(var i=0;i<10;i++){
		console.log('test');
		//console.log('test');
		//console.log('test');
		//console.log('test');}
		console.log(this.getView());
		Ext.log({dump:[1,2]});
	},
	onAfteritemexpand: function( node, index, item, eOpts ){
		var me = this;
		me.eventBus.fireEvent('test',{a:'1'},[1,2]);
		me.eventBus.fireEvent("caonima","Q");
		me.attachListener();
		console.log('expand');
		me.attachListener();
	},
	attachListener:function(){
	 	  var t =	Ext.DomHelper.createTemplate("<span>{label:trim}<input></input><img style='width:17px;height:17px' class='x-form-date-trigger'></img></span>");
		   var html = t.applyTemplate({label:"From"});
	     //var dom = Ext.DomHelper.createDom(html);
		//dom.addEventListener('click',function(){console.log('pop')});
		var handler = function(){ console.log("Click Once");}
		Ext.DomQuery.select("img.x-form-date-trigger")[0].onclick=handler;
		console.log(Ext.DomQuery.select("img.x-form-date-trigger")[0]);
		console.log("id:"+Ext.DomQuery.select("img.x-form-date-trigger")[0].id);
		//Ext.DomQuery.select("img.x-form-date-trigger")[0].addEventListener('click', handler);
      
	},
	init:function() {
		
	    return this.callParent(arguments);
	},
	onboxready:function(){
		var imgs = Ext.DomQuery.select('img.x-form-date-trigger');
		imgs[0].addEventListener('click',function(){console.log('pop')});
		Ext.ComponentQuery.query('treepanel');
		this.attachListener();
	},
	onshow:function(){
		console.log('haha');
	}
});