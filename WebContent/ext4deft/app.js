/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/
Ext.Loader.setPath({
    'Ext': 'ext/src',
    'Deft': 'packages/deft/src/js',
    'ext4deft': 'app'
});
// Create DeftJS Application
Ext.syncRequire(["ext4deft.Application"]);
Ext.create("ext4deft.Application");
