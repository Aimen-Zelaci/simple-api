/**
 * https://www.npmjs.com/package/logzio-node-debug
 */
if(!process.env['DEBUG']){
    console.log('Setting application default DEBUG')
    process.env['DEBUG'] = 'APi*'
}
console.log(`DEBUG set to ${process.env.DEBUG}`)

const { LOGZIO_ACCESS_TOKEN, LOGZIO_LOG_TYPE } = require('../config/env')

if(LOGZIO_ACCESS_TOKEN) {
    const logzOptions = { // Params doc: https://github.com/logzio/logzio-nodejs#options
        token: LOGZIO_ACCESS_TOKEN,
        type: LOGZIO_LOG_TYPE,
        protocol: 'https',
        addTimestampWithNanoSecs: true
    }

    require('logzio-node-debug').init(logzOptions)
}
