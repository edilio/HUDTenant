/**
 * Created with JetBrains WebStorm.
 * User: edilio
 * Date: 5/5/13
 * Time: 8:23 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define("HUDTenant.view.Report50058", {
    extend: 'Ext.Panel',
    xtype: 'report-50058',

    requires: [
        'Ext.TitleBar',
        'HUDTenant.view.PDF'
    ],

    config: {
        title: '50058 PDF',
        iconCls: 'user',
        id: 'pdf-50058',
        styleHtmlContent: true,
        scrollable: true,
        fullscreen: true,
        layout: 'fit',

        items: [

            {
                docked: 'top',
                xtype: 'titlebar',
                title: '50058 PDF',

                items:[
                    {
                        align: 'left',
                        text: 'Back',
                        handler: function(){
                            var pdf = Ext.getCmp('pdf-50058'),
                                main = Ext.getCmp('main');
                            pdf.hide();
                            main.show();

                        }
                    }
                ]
            },

            {
                xtype     : 'pdfpanel',
                layout    : 'fit',
                src       : 'resources/pdfs/huddoc50058.pdf', // URL to the PDF - Same Domain or Server with CORS Support
//                src : 'http://www.jedutils.com/Memory/img/huddoc50058.pdf',
                style     : {
                    backgroundColor: '#333'
                }
            }
        ]
    }
});
