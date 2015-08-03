Ext.define(
				"ext4deft.view.ActionFormContainer",
				{
					extend : "Ext.form.Panel",
					layout : 'anchor',
					alias : 'widget.actionFormContainer',
					controller : "ext4deft.controller.ActionFormContainerController",
					requires : [ "Ext.form.FieldSet" ],
					bodyStyle : 'padding:5px 10px 0',
					items : [
							{
								xtype : 'fieldset',
								title : 'coordinate',
								collapsible : true,
								items : [ {
									xtype : 'textfield',
									name : 'latitude',
									itemId : 'latField',
									id : 'latTextField',
									fieldLabel : 'Latitude'
								}, {
									xtype : 'textfield',
									name : 'longitude',
									itemId : 'lngField',
									id : "lngTextField",
									fieldLabel : 'Longitude'
								} ]
							},
							{
								xtype : 'container',
								layout : 'hbox',
								items : [
										{
											xtype : 'button',
											itemId : 'zoomIn',
											text : 'zoom in'
										},
										{
											xtype : 'button',
											itemId : 'zoomOut',
											text : 'zoom out'
										},
										{
											xtype : 'component',
											html : "<object id='clipboard' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0' width='16' height='16' align='middle'> <param name='allowScriptAccess' value='always' /> <param name='allowFullScreen' value='false' />"
													+ "<param name='movie' value='./resources/clipboard.swf' />"
													+ "<param name='quality' value='high' />"
													+ "<param name='bgcolor' value='#ffffff' />"
													+ "<param name='wmode' value='transparent' />"
													+ "<param name='flashvars' value='callback=f1' />"
													+ "<embed src='clipboard.swf' flashvars='callback=f1' quality='high' bgcolor='#ffffff' width='16' height='16' wmode='transparent' name='clipboard' align='middle' allowscriptaccess='always' allowfullscreen='false' type='application/x-shockwave-flash' pluginspage='http://www.adobe.com/go/getflashplayer' />"
													+ "</object>",
											margin:'0 0 0 10'		
										} ]
							}

					]

				});