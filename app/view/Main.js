Ext.define("HUDTenant.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        tabBarPosition: 'bottom',
        id: 'main',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                cls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to HUD Tenant'
                },

                html: [
                    '<div class="home" style="text-align: center;">' +
                    '<h1>Welcome to HUD Tenant</h1>',
                    '<p>We have created an app so you can calculate your Tenant Rent for public housing or Section 8 Hud Programs based on simple questions.</p>',
                    '<p>In order to be more accurate you should follow the instructions in "Instructions tab" carefully.</p>',
                    '<p>We also will have a pro version where you can put more detailed',
                    ' information so the calculations will be more accurate.</p>',
                    '</div>'
                ].join("")
            },
            {
                xtype:'tenantview'
            },
            {
                xtype: 'container',
                title: 'Phas',
                iconCls: 'info',
                layout: 'fit',
                items: [
                    {
                        xtype: 'phasview'
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'FMRs',
                iconCls: 'info',
                layout: 'fit',
                items: [
                    {
                        xtype: 'fmrsview'
                    }
                ]
            },
            {
                xtype:'instructions'
            },
            {
                xtype: 'contactus'
            },
            {
                xtype: 'tellafriend'
            }

        ]
    }
});
