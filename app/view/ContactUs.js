/**
 * Created with PyCharm.
 * User: edilio
 * Date: 5/28/12
 * Time: 11:11 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define("HUDTenant.view.ContactUs", {
    extend: 'Ext.form.FormPanel',
    xtype: 'contactus',

    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Checkbox',
        'Ext.field.Spinner',
        'Ext.field.Email'
    ],

    config: {
        title: 'Contact Us',
        iconCls: 'user',
        url: 'http://tenant.jedutils.com/contact_us',
        layout: 'vbox',
        standardSubmit : false,
        id: 'contact-form',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Contact Us',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'contactback',
                        ui: 'back',
                        text: 'Back',
                        handler: function(button, e, eOpts) {
                            Ext.Viewport.setActiveItem(Ext.getCmp('main-view'));
                        }
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Contact Us',
                instructions: 'Email address is optional',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'email'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Message',
                        name: 'message',
                        height: 90
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Send',
                ui: 'confirm',

                // The handler is called when the button is tapped
                handler: function() {

                    // This looks up the items stack above, getting a reference to the first form it see
                    var form = this.up('formpanel'),
                        fvalues = form.getValues(),
                        email = fvalues.email,
                        initialsubj = 'HUD Tenant - Message from ' + fvalues.name + ' at ' + email,
                        initialmsg = fvalues.message,
                        good;

                    function checkEmailAddress(field) {

                        var goodEmail = field.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.edu)|(\.mil)|(\.gov)|(\.org)|(\.info)|(\.sex)|(\.biz)|(\.aero)|(\.coop)|(\.museum)|(\.name)|(\.pro)|(\..{2,2}))$)\b/gi);
                        if (goodEmail) {
                            return true;
                        }
                        else {
                            Ext.Msg.alert('Invalid Address','Please enter a valid address.');
                            return false;
                        }
                    }

                    function mailThisUrl(email) {
                        good = checkEmailAddress(email);
                        if (good) {

                            window.location = "mailto:edilio73@gmail.com?subject="+initialsubj+"&body="+initialmsg
                        }
                    }

                    mailThisUrl(email);

                }



            }
        ],
        listeners: [
            {
                fn: 'onFormpanelShow',
                event: 'show'
            }
        ]
    },

    onFormpanelShow: function(component, eOpts) {
        if (Ext.getCmp('main-view') === undefined){
            this.down('titlebar').hide();
        }

    }


});
