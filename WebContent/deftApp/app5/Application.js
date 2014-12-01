Ext.define("deftApp.Application", {
  extend: "Deft.mvc.Application",
  requires: ["deftApp.view.Viewport",'deftApp.store.CompanyStore','deftApp.store.TreePanelStore'],
  init: function() {

    // Configure the DeftJS IoC container
    Deft.Injector.configure({
     companyStore: "deftApp.store.CompanyStore",
	 treePanelStore:'deftApp.store.TreePanelStore',
	 eventBus: 'Ext.util.Observable'
    });

    // Set up QuickTips and create the Viewport
    Ext.tip.QuickTipManager.init();
    Ext.create( "deftApp.view.Viewport" );
  }

});