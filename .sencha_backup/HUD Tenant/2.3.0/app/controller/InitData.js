/**
 * Created with JetBrains WebStorm.
 * User: edilio
 * Date: 5/4/13
 * Time: 10:31 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('HUDTenant.controller.InitData', {
    extend: 'Ext.app.Controller',

    requires: ["HUDTenant.view.TenantView"],

    launch: function() {
        console.log("running launch init data controller");
        var pp, store = Ext.getStore('data-store');
        if (store === undefined){
            store = Ext.create('HUDTenant.store.DataStore');
        }
        if (store.data.length === 0){
            pp = Ext.create('HUDTenant.model.Data', { 'adults':1});
            pp.save();
            store.add(pp);
            store.sync()
        }
        else{
            pp = store.data.all[0];
        }
        var form = Ext.getCmp('tenant-view');
        if (form === undefined){
            form = Ext.create("HUDTenant.view.TenantView");
        }
        form.setRecord(pp);
    }
});

