/*
 * File: app/store/StateStore.js
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

Ext.define('HUDTenant.store.StateStore', {
    extend: 'Ext.data.Store',

    requires: [
        'HUDTenant.model.State',
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Array'
    ],

    config: {
        autoLoad: true,
        data: [
            [
                'All',
                'All'
            ],
            [
                'AL',
                'Alabama'
            ],
            [
                'AK',
                'Alaska'
            ],
            [
                'AS',
                'American Samoa'
            ],
            [
                'AZ',
                'Arizona'
            ],
            [
                'AR',
                'Arkansas'
            ],
            [
                'CA',
                'California'
            ],
            [
                'CO',
                'Colorado'
            ],
            [
                'CT',
                'Connecticut'
            ],
            [
                'DE',
                'Delaware'
            ],
            [
                'DC',
                'District Of Columbia'
            ],
            [
                'FM',
                'Federated States Of Micronesia'
            ],
            [
                'FL',
                'Florida'
            ],
            [
                'GA',
                'Georgia'
            ],
            [
                'GU',
                'Guam'
            ],
            [
                'HI',
                'Hawaii'
            ],
            [
                'ID',
                'Idaho'
            ],
            [
                'IL',
                'Illinois'
            ],
            [
                'IN',
                'Indiana'
            ],
            [
                'IA',
                'Iowa'
            ],
            [
                'KS',
                'Kansas'
            ],
            [
                'KY',
                'Kentucky'
            ],
            [
                'LA',
                'Louisiana'
            ],
            [
                'ME',
                'Maine'
            ],
            [
                'MH',
                'Marshall Islands'
            ],
            [
                'MD',
                'Maryland'
            ],
            [
                'MA',
                'Massachusetts'
            ],
            [
                'MI',
                'Michigan'
            ],
            [
                'MN',
                'Minnesota'
            ],
            [
                'MS',
                'Mississippi'
            ],
            [
                'MO',
                'Missouri'
            ],
            [
                'MT',
                'Montana'
            ],
            [
                'NE',
                'Nebraska'
            ],
            [
                'NV',
                'Nevada'
            ],
            [
                'NH',
                'New Hampshire'
            ],
            [
                'NJ',
                'New Jersey'
            ],
            [
                'NM',
                'New Mexico'
            ],
            [
                'NY',
                'New York'
            ],
            [
                'NC',
                'North Carolina'
            ],
            [
                'ND',
                'North Dakota'
            ],
            [
                'MP',
                'Northern Mariana Islands'
            ],
            [
                'OH',
                'Ohio'
            ],
            [
                'OK',
                'Oklahoma'
            ],
            [
                'OR',
                'Oregon'
            ],
            [
                'PW',
                'Palau'
            ],
            [
                'PA',
                'Pennsylvania'
            ],
            [
                'PR',
                'Puerto Rico'
            ],
            [
                'RI',
                'Rhode Island'
            ],
            [
                'SC',
                'South Carolina'
            ],
            [
                'SD',
                'South Dakota'
            ],
            [
                'TN',
                'Tennessee'
            ],
            [
                'TX',
                'Texas'
            ],
            [
                'UT',
                'Utah'
            ],
            [
                'VT',
                'Vermont'
            ],
            [
                'VI',
                'Virgin Islands'
            ],
            [
                'VA',
                'Virginia'
            ],
            [
                'WA',
                'Washington'
            ],
            [
                'WV',
                'West Virginia'
            ],
            [
                'WI',
                'Wisconsin'
            ],
            [
                'WY',
                'Wyoming'
            ]
        ],
        model: 'HUDTenant.model.State',
        storeId: 'StateStore',
        proxy: {
            type: 'memory',
            reader: {
                type: 'array'
            }
        }
    }
});