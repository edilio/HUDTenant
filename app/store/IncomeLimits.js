/**
 * Created with PyCharm.
 * User: edilio
 * Date: 5/11/12
 * Time: 8:24 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('HUDTenant.store.IncomeLimits', {
    extend : 'Ext.data.Store',

    requires:[
        'HUDTenant.model.IncomeLimit'
    ],

    config:{
        model: 'HUDTenant.model.IncomeLimit',
        sorters: 'lastName',

        autoLoad : true,

        data: [
            { firstName: 'Camila',   lastName: 'Gallardo'  },
            { firstName: 'Edilio',     lastName: 'Gallardo'  },
            { firstName: 'Laidy',      lastName: 'Perez' },
            { firstName: 'Jamie',   lastName: 'Avins'   },
            { firstName: 'Aaron',   lastName: 'Conran'  },
            { firstName: 'Dave',    lastName: 'Kaneda'  }
        ]
    }
});
