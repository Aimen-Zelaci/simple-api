const mysql = require('mysql')
const {DB} = require('../config/env')

// You CAN USE YOUR AWS DB, AND CUSTOMIZE IT EVEN FURTHER!
//USING POOL IS MORE EFFICIENT.
/**Please Check
 * https://www.npmjs.com/package/mysql
 * @type {Pool}
 */
class DbManager{
    constructor(){
        // "INSTANTIATE"
    }
    connect(){
        return mysql.createPool({
            connectionLimit: DB.connectionLimit,
            host: DB.host,
            user: DB.user,
            password: DB.password,
            database: DB.database
        })
    }
}

module.exports = new DbManager();
