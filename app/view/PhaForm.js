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
        'Ext.field.Text',
        'Ext.MessageBox'
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
                            var main = Ext.getCmp('main');

                            if (main === undefined){
                               main = Ext.getCmp('main-view');
                            }
                            Ext.Viewport.setActiveItem(main);
                        },
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype:'fieldset',
                items:[

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
                        label: 'City',
                        name: 'city',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'Zip',
                        name: 'zip_code',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'State',
                        name: 'state',
                        readOnly: true
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [

                            {
                                xtype: 'textfield',
                                label: 'Phone',
                                name: 'phone_number',
                                readOnly: true,
                                flex:9
                            },
                            {
                                xtype: 'button',
                                text: 'call',
                                ui:'confirm-round',
                                handler: function(button, e){
                                    var f = button.up('formpanel'),
                                        tel = f.getRecord().get('phone_number');

                                    if (tel !== null){
                                        if (navigator.userAgent.match(/iPhone/) === null){
                                            Ext.Msg.alert("HUD Tenant", "Sorry, Only phones can call.");
                                        }
                                        else{
                                            window.location.href = "tel:"+tel;
                                        }

                                    }
                                },
                                flex:1
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        label: 'Fax',
                        name: 'fax_number',
                        readOnly: true
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                disabled: false,
                                label: 'Email',
                                name: 'email_address',
                                readOnly: true,
                                flex:9
                            },
                            {
                                xtype: 'button',
                                text: 'Email',
                                ui:'confirm-round',
                                handler: function(button, e){
                                    var f = button.up('formpanel'),
                                        email = f.getRecord().get('email_address');

                                    if (email !== null){
                                        window.location.href = "mailto:"+email;
                                    }
                                },
                                flex:1
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                disabled: false,
                                label: 'Web Site',
                                name: 'web_page_address',
                                readOnly: true,
                                flex:9
                            },
                            {
                                xtype: 'button',
                                text: 'Browse',
                                ui:'confirm-round',
                                handler: function(button, e){
                                    var f = button.up('formpanel'),
                                        url = f.getRecord().get('web_page_address');

                                    if (url !== null){
                                        if (url.toLowerCase().substring(0,7) !== "http://"){
                                            url = "http://" + url;
                                        }
                                        window.open(url, '_blank', 'location=yes');
                                    }
                                },
                                flex:1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            var form = button.up('formpanel'),
                                rec = form.getRecord(),
                                address = rec.get('line1'),
                                city = rec.get('city'),
                                state = rec.get('state'),
                                zip_code = rec.get('zip_code');
                            window.open('waze://?q='+ address + ' , ' + city + ' ' + state + ' ' + zip_code);
                        },
                        padding: '5 5 5 5',
                        ui: 'confirm-small',
                        text: 'Navigate using Waze'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            }

        ]
    }

});