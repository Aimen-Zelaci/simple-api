/**
 * ENVIRONMENT VARIABLES
 * https://en.wikipedia.org/wiki/Environment_variable
 */
module.exports ={
    LOGZIO_ACCESS_TOKEN: process.env.LOGZIO_ACCESS_TOKEN ? process.env.LOGZIO_ACCESS_TOKEN : null,
    LOGZIO_LOG_TYPE: process.env.LOGZIO_LOG_TYPE ? process.env.LOGZIO_LOG_TYPE : 'API',
    DB:{
        connectionLimit: process.env.CONNECTION_LIMIT || 10,
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'password',
        database: process.env.MYSQL_DB || 'sys'
    }
}
