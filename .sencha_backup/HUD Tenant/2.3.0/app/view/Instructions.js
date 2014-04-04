/**
 * Created with PyCharm.
 * User: edilio
 * Date: 5/26/12
 * Time: 11:52 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define("HUDTenant.view.Instructions", {
    extend: 'Ext.Panel',
    xtype: 'instructions',

    requires: [
        'Ext.TitleBar'
    ],

    config: {
        title: 'Instructions',
        iconCls: 'maps',
        styleHtmlContent: true,
        scrollable: true,

        id: 'instructions-view',

        items: [

                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Instructions'
                }
        ],

        display50058 : function (){
            console.log("displaying");
            var pdf = Ext.getCmp('pdf-50058'),
                main = Ext.getCmp('main');
            if (pdf === undefined){
                pdf = Ext.create('HUDTenant.view.Report50058');
            }
            main.hide();
            pdf.show();
            return false;
        },

        html: [
            '<div style="text-align: center;">',
            '<p>The calculus is based on 50058 documentation form HUD Website. ',
            'You should fill out all the parameters and then tap on Calculate Button. ',
            'The app will show you a message with the result. ',
            'Please, be advised that the more important parameter to calculate the rent is the total income. ',
            'If you do not have any income then the minimum rent is set by default to 50. ',
            'All numbers related to Income, Assets and Expenses are expecting yearly numbers.</p>',
            '<p>We need to use short labels for the fields and this can cause confusion. ',
            'Here comes a better explanation:</p>',
            '<p>Adults(18-61) means Adults over 18 and below 62 without including full-time students.</p>',
            '<p>Seniors means Adults over 62. </p>',
            '<p>Full-time students means Full time students over 18 (an institution needs to certify that)</p>',
            '<p>Disabled means Is Head/Co-head or Spouse Disabled because the allowance only applies for head/co-head or spouse.</p>',
            '<p>Elderly/disability allowance (default = $400)</p>',
            '<p>Allowance per dependent (default = $480)</p>',
            '<p></p>',
            '<p>Total Assets refers to CDs, Saving Accounts or other assets you might have regardless of how much money are you expecting to received from this assets</p>',
            '<p>Total Expected Assets refers how much money are you expecting to received from the assets you own.</p>',
            '<p>Utility Allowance refers to things like electricity, cooking, heat water etc. and the rent is always affected by this number. ',
            'If you have Utilities yet(not in the plan yet) you should leave it in blank(0).</p>',
            '<p>In order to be more accurate you should follow the instructions above carefully.</p>',
            '<p>We also will have a pro version where you can put more detailed',
            ' information so the calculations will be more accurate.</p>' +
            '<p>For more information: <a href="#" onclick="',
            'var view = Ext.getCmp(',
            "'instructions-view'); return view.config.display50058();",
            '">',
            'Download 50058 form(HUD official form)</a></p>'
        ].join("")
    }
});

