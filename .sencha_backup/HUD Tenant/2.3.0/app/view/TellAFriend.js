/**
 * Created with PyCharm.
 * User: edilio
 * Date: 5/28/12
 * Time: 11:30 AM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with PyCharm.
 * User: edilio
 * Date: 5/28/12
 * Time: 11:11 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define("HUDTenant.view.TellAFriend", {
    extend: 'Ext.form.FormPanel',
    xtype: 'tellafriend',

    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Checkbox',
        'Ext.field.Spinner',
        'Ext.field.Email'
    ],

    config: {
        title: 'Tell a friend',
        iconCls: 'team',
        layout: 'vbox',
        id: 'tell-form',

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
                title: 'Tell a friend',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Subject',
                        name: 'subject',
                        value: 'Hey buddy, take a look at this'
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
                        value: 'Hi:\n You may want to check out this site: www.jedutils.com',
                        height: 90
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Tell',
                ui: 'confirm',

                // The handler is called when the button is tapped
                handler: function() {

                    // This looks up the items stack above, getting a reference to the first form it see
                    var form = this.up('formpanel'),
                        fvalues = form.getValues(),
                        email = fvalues.email,
                        initialsubj = fvalues.subject,
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

//window.location = "mailto:"+document.eMailer.email.value+"?subject="+initialsubj+"&body="+document.title+" "+u;
                            window.location = "mailto:"+ email+"?subject="+initialsubj+"&body="+initialmsg
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

