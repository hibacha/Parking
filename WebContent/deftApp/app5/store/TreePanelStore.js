Ext.define('deftApp.store.TreePanelStore',{
	extend:'Ext.data.TreeStore',
	root: {
	        expanded: true,
	        children: [
	            { text: "detention", leaf: true },
	            { text: "homework", expanded: true, children: [
	                { text: "book report", leaf: true },
	                { text: "alegrbra", leaf: true}
	            ] },
	            { text: "From<input></input><img id='id1' style='width:17px;height:17px' class='x-form-date-trigger'></img>", leaf: true }
	        ]
	 }
});