/**
 * Created with JetBrains WebStorm.
 * User: edilio
 * Date: 2/8/14
 * Time: 8:40 AM
 * To change this template use File | Settings | File Templates.
 */

function clearSqlDataBases(){
    Ext.StoreManager.all.forEach(function(store){
        var p = store.getProxy();

        if (p.$className === "Ext.data.proxy.Sql"){
            p.dropTable({
                callback: function(){
                    var db = p.getDatabaseObject();
                    db.transaction(function(transaction) {
                        p.createTable(transaction);
                    });
                }
            });
        }
    });
}


