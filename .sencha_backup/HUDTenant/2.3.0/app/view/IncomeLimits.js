/**
 * Created with PyCharm.
 * User: edilio
 * Date: 5/11/12
 * Time: 8:06 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("HUDTenant.view.IncomeLimits", {
    extend: 'Ext.navigation.View',

    xtype:'incomelimits',
    requires:[
        'Ext.dataview.List',
        'Ext.data.Store',
        'HUDTenant.model.IncomeLimit',
        'HUDTenant.store.IncomeLimits'
    ],

    config: {
        title: 'Income Limits',
        iconCls: 'star',

        items: [
            {
                xtype:'list',

                itemTpl: '{lastName}, {firstName}',
                store: 'IncomeLimits'
            }

        ]

    }

});


