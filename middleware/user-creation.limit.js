/**
 * https://www.npmjs.com/package/express-rate-limit
 * @type {RateLimit}
 */
const rateLimit = require("express-rate-limit");

const max = 5
const windowHour = 1

module.exports = new rateLimit({
    windowMs: windowHour * 60 * 60 * 1000, // 1 hour window
    max, // start blocking after 5 requests
    message:
        `Too many requests! You are only allowed to  create ${max} accounts per ${windowHour} hour`,
    statusCode: 429,
})
