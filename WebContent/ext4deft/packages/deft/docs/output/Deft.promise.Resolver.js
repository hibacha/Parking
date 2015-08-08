Ext.data.JsonP.Deft_promise_Resolver({"meta":{"private":true},"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Deft.Resolver</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Deft.promise.Resolver</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Deft.util.Function' rel='Deft.util.Function' class='docClass'>Deft.util.Function</a></div><h4>Files</h4><div class='dependency'><a href='source/Resolver.html#Deft-promise-Resolver' target='_blank'>Resolver.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Resolvers are used internally by Deferreds and Promises to capture and notify\ncallbacks, process callback return values and propagate resolution or rejection\nto chained Resolvers.</p>\n\n<p>Developers never directly interact with a Resolver.</p>\n\n<p>A Resolver captures a pair of optional onResolved and onRejected callbacks and\nhas an associated Promise. That Promise delegates its then() calls to the\nResolver's then() method, which creates a new Resolver and schedules its\ndelayed addition as a chained Resolver.</p>\n\n<p>Each Deferred has an associated Resolver. A Deferred delegates resolve() and\nreject() calls to that Resolver's resolve() and reject() methods. The Resolver\nprocesses the resolution value and rejection reason, and propagates the\nprocessed resolution value or rejection reason to any chained Resolvers it may\nhave created in response to then() calls. Once a chained Resolver has been\nnotified, it is cleared out of the set of chained Resolvers and will not be\nnotified again.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Resolver'>Deft.promise.Resolver</span><br/><a href='source/Resolver.html#Deft-promise-Resolver-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Deft.promise.Resolver-method-constructor' class='name expandable'>Deft.promise.Resolver</a>( <span class='pre'>onResolved, onRejected, onProgress</span> ) : <a href=\"#!/api/Deft.promise.Resolver\" rel=\"Deft.promise.Resolver\" class=\"docClass\">Deft.promise.Resolver</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onResolved</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>onRejected</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>onProgress</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Resolver\" rel=\"Deft.promise.Resolver\" class=\"docClass\">Deft.promise.Resolver</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-reject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Resolver'>Deft.promise.Resolver</span><br/><a href='source/Resolver.html#Deft-promise-Resolver-method-reject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Resolver-method-reject' class='name expandable'>reject</a>( <span class='pre'>reason</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Rejects this Resolver with the specified reason, triggering it to execute the 'onRejected' callback and propagate the...</div><div class='long'><p>Rejects this Resolver with the specified reason, triggering it to execute the 'onRejected' callback and propagate the resulting resolution value or rejection reason to Resolvers that originate from this Resolver.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reason</span> : Error<div class='sub-desc'><p>The rejection reason.</p>\n</div></li></ul></div></div></div><div id='method-resolve' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Resolver'>Deft.promise.Resolver</span><br/><a href='source/Resolver.html#Deft-promise-Resolver-method-resolve' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Resolver-method-resolve' class='name expandable'>resolve</a>( <span class='pre'>value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resolves this Resolver with the specified value, triggering it to execute the 'onResolved' callback and propagate the...</div><div class='long'><p>Resolves this Resolver with the specified value, triggering it to execute the 'onResolved' callback and propagate the resulting resolution value or rejection reason to Resolvers that originate from this Resolver.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The resolved future value.</p>\n</div></li></ul></div></div></div><div id='method-then' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Resolver'>Deft.promise.Resolver</span><br/><a href='source/Resolver.html#Deft-promise-Resolver-method-then' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Resolver-method-then' class='name expandable'>then</a>( <span class='pre'>onFulfilled, onRejected, onProgress, scope</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Schedules creation of a new Resolver that originates from this Resolver, configured with the specified callbacks. ...</div><div class='long'><p>Schedules creation of a new Resolver that originates from this Resolver, configured with the specified callbacks.  Those callbacks can subsequently transform the value that was resolved or the reason that was rejected.</p>\n\n<p>Each call to then() returns a new Promise of that transformed value; i.e., a Promise that is resolved with the callback return value or rejected with any error thrown by the callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onFulfilled</span> : Function<div class='sub-desc'><p>Callback function to be called when resolved.</p>\n</div></li><li><span class='pre'>onRejected</span> : Function<div class='sub-desc'><p>Callback function to be called when rejected.</p>\n</div></li><li><span class='pre'>onProgress</span> : Function<div class='sub-desc'><p>Callback function to be called with progress updates.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>Optional scope for the callback(s).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A Promise of the transformed future value.</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Resolver'>Deft.promise.Resolver</span><br/><a href='source/Resolver.html#Deft-promise-Resolver-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Resolver-method-update' class='name expandable'>update</a>( <span class='pre'>progress</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Updates progress for this Resolver, if it is still pending, triggering it to execute the 'onProgress' callback and pr...</div><div class='long'><p>Updates progress for this Resolver, if it is still pending, triggering it to execute the 'onProgress' callback and propagate the resulting transformed progress value to Resolvers that originate from this Resolver.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>progress</span> : Mixed<div class='sub-desc'><p>The progress value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"alternateClassNames":["Deft.Resolver"],"autodetected":{"uses":true,"alternateClassNames":true,"aliases":true,"members":true,"mixins":true,"extends":true,"code_type":true,"requires":true},"aliases":{},"mixedInto":[],"parentMixins":[],"superclasses":["Ext.Base"],"members":[{"meta":{},"owner":"Deft.promise.Resolver","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"Deft.promise.Resolver","name":"reject","id":"method-reject","tagname":"method"},{"meta":{},"owner":"Deft.promise.Resolver","name":"resolve","id":"method-resolve","tagname":"method"},{"meta":{},"owner":"Deft.promise.Resolver","name":"then","id":"method-then","tagname":"method"},{"meta":{},"owner":"Deft.promise.Resolver","name":"update","id":"method-update","tagname":"method"}],"mixins":[],"extends":"Ext.Base","private":true,"subclasses":[],"code_type":"ext_define","name":"Deft.promise.Resolver","id":"class-Deft.promise.Resolver","requires":["Deft.util.Function"],"tagname":"class","short_doc":"Resolvers are used internally by Deferreds and Promises to capture and notify\ncallbacks, process callback return valu...","files":[{"href":"Resolver.html#Deft-promise-Resolver","filename":"Resolver.js"}]});