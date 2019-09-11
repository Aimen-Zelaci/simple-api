#!/usr/bin/env node

(function main() {
    require('../utils/logging')
    const http = require('http')
    const app = require('../app')
    const debug = require('logzio-node-debug').debug('APi:' + require('path').basename(__filename))
    const port = process.env.PORT || 3000

    const httpServer = http.createServer(app)

    httpServer.listen(port)

    httpServer.on('listening', () => debug('Listening on ' + port))
})()

