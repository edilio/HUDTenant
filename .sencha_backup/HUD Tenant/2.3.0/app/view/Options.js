/*
 * File: app/view/Options.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HUDTenant.view.Options', {
    extend: 'Ext.Container',
    alias: 'widget.options',

    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'More Options'
            },
            {
                xtype: 'list',
                itemId: 'mylist1',
                itemTpl: [
                    '<div>{description}</div>'
                ],
                store: 'OptionsStore'
            }
        ],
        listeners: [
            {
                fn: 'onMylist1ItemTap',
                event: 'itemtap',
                delegate: '#mylist1'
            }
        ]
    },

    onMylist1ItemTap: function(dataview, index, target, record, e, eOpts) {
        var form,
            getForm = function(name,className){
                var cmp = Ext.getCmp(name);
                if (cmp === undefined){
                    cmp = Ext.create(className);
                }
                return cmp;
            };

        if (record.get('code') === 1){
            form = getForm('contact-form','HUDTenant.view.ContactUs');

        }
        else{
            form = getForm('tell-form','HUDTenant.view.TellAFriend');
        }
        Ext.Viewport.setActiveItem(form);
    }

});