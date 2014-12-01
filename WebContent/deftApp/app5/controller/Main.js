(function(){
Ext.define('deftApp.controller.Main', {
    extend: "Deft.mvc.ViewController",
 //	mixins: [ 'Deft.mixin.Injectable' ],
	inject: ["companyStore","eventBus"],
	observe:{
		eventBus:{
			caonima:"onCaonima"
		}
	},
	control:{
		view:{
			boxready:'onShow'
		},
		
		btn:{
			selector:'toolbar > button',
			listeners:{
				click:{
					fn:"onClick",
					buffer:2000
				
				}
			}
		},
		winContainer:{
			boxready: 'onBoxReadyForWin'
		}
	},
	init: function() {		
	    return this.callParent(arguments);
	},
	onBoxReadyForWin:function(){
		console.log('winContainer rendered');
		var me = this;
		console.log(me.getView().rendered);
	},
	//Delay task public API
	sendDelayRequest:function(){
		var me = this;
		if(!this.delayTaskInstance){
			this.delayTaskInstance = new Ext.util.DelayedTask(me.displaySomething);
		}
		this.delayTaskInstance.delay(2000);
	},
	// private delay task
	displaySomething:function(){
		console.log("send request!");
	},
	onShow:function(){
	 	var me = this;
		console.log(me.getBtn().rendered);
	},
	onClick:function(button){
	   	var me = this;
		console.log(button);
		console.log(me.getView().getComponent('winContainer'));
	   
	},
	onCaonima:function(name){
		console.log(name + ":" +"caonima is coming!");
	}
 });
})();