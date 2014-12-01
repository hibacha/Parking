Ext.data.JsonP.Deft_event_LiveEventBus({"tagname":"class","name":"Deft.event.LiveEventBus","extends":"Ext.Base","mixins":[],"alternateClassNames":["Deft.LiveEventBus"],"aliases":{},"singleton":true,"requires":["Ext.Component","Ext.ComponentManager","Deft.event.LiveEventListener"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Deft.event.LiveEventBus","code_type":"ext_define","members":{"cfg":[],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-constructor"},{"name":"addListener","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-addListener"},{"name":"destroy","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-destroy"},{"name":"findListener","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-findListener"},{"name":"on","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-on"},{"name":"onComponentAdded","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-onComponentAdded"},{"name":"onComponentRemoved","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-onComponentRemoved"},{"name":"register","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-register"},{"name":"removeListener","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-removeListener"},{"name":"un","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-un"},{"name":"unregister","tagname":"method","owner":"Deft.event.LiveEventBus","meta":{"private":true},"id":"method-unregister"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":7,"files":[{"filename":"LiveEventBus.js","href":"LiveEventBus.html#Deft-event-LiveEventBus"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Deft.LiveEventBus</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Deft.event.LiveEventBus</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Deft.event.LiveEventListener' rel='Deft.event.LiveEventListener' class='docClass'>Deft.event.LiveEventListener</a></div><div class='dependency'>Ext.Component</div><div class='dependency'>Ext.ComponentManager</div><h4>Files</h4><div class='dependency'><a href='source/LiveEventBus.html#Deft-event-LiveEventBus' target='_blank'>LiveEventBus.js</a></div></pre><div class='doc-contents'><p>Event bus for live component selectors.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Deft.event.LiveEventBus-method-constructor' class='name expandable'>Deft.event.LiveEventBus</a>( <span class='pre'></span> ) : <a href=\"#!/api/Deft.event.LiveEventBus\" rel=\"Deft.event.LiveEventBus\" class=\"docClass\">Deft.event.LiveEventBus</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.event.LiveEventBus\" rel=\"Deft.event.LiveEventBus\" class=\"docClass\">Deft.event.LiveEventBus</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>container, selector, eventName, fn, scope, options</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-findListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-findListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-findListener' class='name expandable'>findListener</a>( <span class='pre'>container, selector, eventName, fn, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-on' class='name expandable'>on</a>( <span class='pre'>container, selector, eventName, fn, scope, options</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onComponentAdded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-onComponentAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-onComponentAdded' class='name expandable'>onComponentAdded</a>( <span class='pre'>component, container, eOpts</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onComponentRemoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-onComponentRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-onComponentRemoved' class='name expandable'>onComponentRemoved</a>( <span class='pre'>component, container, eOpts</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-register' class='name expandable'>register</a>( <span class='pre'>component</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>container, selector, eventName, fn, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-un' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-un' class='name expandable'>un</a>( <span class='pre'>container, selector, eventName, fn, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-unregister' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.event.LiveEventBus'>Deft.event.LiveEventBus</span><br/><a href='source/LiveEventBus.html#Deft-event-LiveEventBus-method-unregister' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.event.LiveEventBus-method-unregister' class='name expandable'>unregister</a>( <span class='pre'>component</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});