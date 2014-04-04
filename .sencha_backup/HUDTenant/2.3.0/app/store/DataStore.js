Ext.define('HUDTenant.store.DataStore', {
    extend : 'Ext.data.Store',

    requires:[
        'HUDTenant.model.Data'
    ],

    config:{
        model: 'HUDTenant.model.Data',

        autoLoad : true,
        storeId : 'data-store',
        identifier: 'sequential'

    }
});
