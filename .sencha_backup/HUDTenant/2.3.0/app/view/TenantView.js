/**
 * Created with PyCharm.
 * User: edilio
 * Date: 5/9/12
 * Time: 9:18 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("HUDTenant.view.TenantView", {
    extend: 'Ext.form.FormPanel',

    xtype: "tenantview",

    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Checkbox',
        'Ext.field.Spinner'
    ],

    config: {
        title: 'Tenant',
        iconCls: 'compose',

        scrollable: true,
        id: 'tenant-view',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Tenant Questions'
            },
            {
                xtype:'fieldset',
                defaults: {
                    labelWidth: '50%',
                    labelWrap : true
                },
                flex: 1,
                instructions:"Fill out your info and then tap on calculate button",

                items:[
                    {
                        xtype: 'spinnerfield',
                        name: 'adults',
                        label: 'Adults (18-61)',
                        minValue: 1,
                        maxValue: 10,
                        stepValue: 1,
                        cycle: true,
                        groupButtons: false,
                        placeholder:'how many adults over 18 and below 62'
                    },
                    {
                        xtype: 'spinnerfield',
                        name: 'seniors',
                        label: 'Adults > 62',
                        minValue: 0,
                        maxValue: 10,
                        stepValue: 1,
                        cycle: true,
                        groupButtons: false,
                        placeholder:'how many adults over 62'
                    },
                    {
                        xtype:'spinnerfield',
                        name:'youth',
                        label:'Young < 18',
                        minValue: 0,
                        maxValue: 10,
                        stepValue: 1,
                        cycle: true,
                        groupButtons: false,
                        placeholder:'how many young below 18'
                    },
                    {
                        xtype:'spinnerfield',
                        name:'fulltime',
                        label:'Fulltime Student',
                        minValue: 0,
                        maxValue: 10,
                        stepValue: 1,
                        cycle: true,
                        groupButtons: false,
                        placeholder:'how many full time over 18'
                    },
                    {
                        xtype:'checkboxfield',
                        name:'disabled',
                        label:'Disabled'

                    },
                    {
                        xtype: 'numberfield',
                        label: 'Total Income',
                        minValue: 0,
                        maxValue: 150000,
                        name: 'totalincome'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Total Assets',
                        minValue: 0,
                        maxValue: 150000,
                        name: 'totalassets'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Total Expected Assets',
                        minValue: 0,
                        maxValue: 150000,
                        name: 'totalexpectedassets'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Total Expenses',
                        minValue: 0,
                        maxValue: 150000,
                        name: 'totalexpenses'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Utility Allowance',
                        minValue: 0,
                        maxValue: 150000,
                        name: 'utilityallowance'
                    }
                ]
            },
            {
                xtype: 'button',
                //flex: 1,
                ui: 'confirm',
                iconCls: 'action',
                iconMask: true,
                text: 'Calculate',
                handler: function() {
                    var form = this.up('tenantview'),
                        rec = form.getRecord(),
                        store = Ext.getStore('data-store');
                    form.updateRecord(rec);

                    store.sync();
                    Ext.Msg.alert('Tenant Rent', 'Tenant Rent: ' + rec.tenantRent(), Ext.emptyFn);
                }
            }
        ]
    }

});
