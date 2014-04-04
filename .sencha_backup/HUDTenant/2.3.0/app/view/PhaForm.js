/*
 * File: app/view/PhaForm.js
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

Ext.define('HUDTenant.view.PhaForm', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.field.Text'
    ],

    config: {
        id: 'pha-form',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'PHA Info',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            Ext.Viewport.setActiveItem(Ext.getCmp('phasview'));
                        },
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'textfield',
                label: 'Name',
                name: 'name',
                readOnly: true
            },
            {
                xtype: 'textfield',
                label: 'Address 1',
                name: 'line1',
                readOnly: true
            },
            {
                xtype: 'textfield',
                label: 'Address 2',
                name: 'line2',
                readOnly: true
            },
            {
                xtype: 'textfield',
                label: 'Phone',
                name: 'phone_number',
                readOnly: true
            },
            {
                xtype: 'textfield',
                label: 'Fax',
                name: 'fax_number',
                readOnly: true
            },
            {
                xtype: 'textfield',
                disabled: false,
                label: 'Email',
                name: 'email_address',
                readOnly: true
            }
        ]
    }

});