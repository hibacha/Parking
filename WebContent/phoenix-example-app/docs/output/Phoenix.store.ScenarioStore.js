Ext.data.JsonP.Phoenix_store_ScenarioStore({"tagname":"class","name":"Phoenix.store.ScenarioStore","extends":"Ext.data.Store","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":["Phoenix.model.Scenario"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Phoenix.store.ScenarioStore","code_type":"ext_define","members":{"cfg":[{"name":"appConfig","tagname":"cfg","owner":"Phoenix.store.ScenarioStore","meta":{"private":true},"id":"cfg-appConfig"}],"property":[{"name":"autoLoad","tagname":"property","owner":"Phoenix.store.ScenarioStore","meta":{"private":true},"id":"property-autoLoad"},{"name":"inject","tagname":"property","owner":"Phoenix.store.ScenarioStore","meta":{"private":true},"id":"property-inject"},{"name":"model","tagname":"property","owner":"Phoenix.store.ScenarioStore","meta":{"private":true},"id":"property-model"}],"method":[{"name":"constructor","tagname":"method","owner":"Phoenix.store.ScenarioStore","meta":{},"id":"method-constructor"},{"name":"getAppConfig","tagname":"method","owner":"Phoenix.store.ScenarioStore","meta":{},"id":"method-getAppConfig"},{"name":"isSyncNeeded","tagname":"method","owner":"Phoenix.store.ScenarioStore","meta":{},"id":"method-isSyncNeeded"},{"name":"setAppConfig","tagname":"method","owner":"Phoenix.store.ScenarioStore","meta":{},"id":"method-setAppConfig"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":2,"files":[{"filename":"ScenarioStore.js","href":"ScenarioStore.html#Phoenix-store-ScenarioStore"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.data.Store"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>Phoenix.store.ScenarioStore</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Phoenix.model.Scenario' rel='Phoenix.model.Scenario' class='docClass'>Phoenix.model.Scenario</a></div><h4>Files</h4><div class='dependency'><a href='source/ScenarioStore.html#Phoenix-store-ScenarioStore' target='_blank'>ScenarioStore.js</a></div></pre><div class='doc-contents'><p>Collection of {<a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a>} models.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-appConfig' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.store.ScenarioStore'>Phoenix.store.ScenarioStore</span><br/><a href='source/ScenarioStore.html#Phoenix-store-ScenarioStore-cfg-appConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.store.ScenarioStore-cfg-appConfig' class='name not-expandable'>appConfig</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoLoad' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.store.ScenarioStore'>Phoenix.store.ScenarioStore</span><br/><a href='source/ScenarioStore.html#Phoenix-store-ScenarioStore-property-autoLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.store.ScenarioStore-property-autoLoad' class='name expandable'>autoLoad</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-inject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.store.ScenarioStore'>Phoenix.store.ScenarioStore</span><br/><a href='source/ScenarioStore.html#Phoenix-store-ScenarioStore-property-inject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.store.ScenarioStore-property-inject' class='name expandable'>inject</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[&quot;appConfig&quot;]</code></p></div></div></div><div id='property-model' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.store.ScenarioStore'>Phoenix.store.ScenarioStore</span><br/><a href='source/ScenarioStore.html#Phoenix-store-ScenarioStore-property-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.store.ScenarioStore-property-model' class='name expandable'>model</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;Phoenix.model.Scenario&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.store.ScenarioStore'>Phoenix.store.ScenarioStore</span><br/><a href='source/ScenarioStore.html#Phoenix-store-ScenarioStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Phoenix.store.ScenarioStore-method-constructor' class='name expandable'>Phoenix.store.ScenarioStore</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Phoenix.store.ScenarioStore\" rel=\"Phoenix.store.ScenarioStore\" class=\"docClass\">Phoenix.store.ScenarioStore</a></div><div class='description'><div class='short'>Constructor. ...</div><div class='long'><p>Constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Phoenix.store.ScenarioStore\" rel=\"Phoenix.store.ScenarioStore\" class=\"docClass\">Phoenix.store.ScenarioStore</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAppConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.store.ScenarioStore'>Phoenix.store.ScenarioStore</span><br/><a href='source/ScenarioStore.html#Phoenix-store-ScenarioStore-cfg-appConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.store.ScenarioStore-method-getAppConfig' class='name expandable'>getAppConfig</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of appConfig. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Phoenix.store.ScenarioStore\" rel=\"Phoenix.store.ScenarioStore\" class=\"docClass\">appConfig</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isSyncNeeded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.store.ScenarioStore'>Phoenix.store.ScenarioStore</span><br/><a href='source/ScenarioStore.html#Phoenix-store-ScenarioStore-method-isSyncNeeded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.store.ScenarioStore-method-isSyncNeeded' class='name expandable'>isSyncNeeded</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true the store contains unsynced {Phoenix.model.Scenario} models. ...</div><div class='long'><p>Returns true the store contains unsynced {<a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a>} models.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAppConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.store.ScenarioStore'>Phoenix.store.ScenarioStore</span><br/><a href='source/ScenarioStore.html#Phoenix-store-ScenarioStore-cfg-appConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.store.ScenarioStore-method-setAppConfig' class='name expandable'>setAppConfig</a>( <span class='pre'>appConfig</span> )</div><div class='description'><div class='short'>Sets the value of appConfig. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Phoenix.store.ScenarioStore\" rel=\"Phoenix.store.ScenarioStore\" class=\"docClass\">appConfig</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>appConfig</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});