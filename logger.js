'use strict';
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'debug',
    format: format.simple(),
    // You can also comment out the line above and uncomment the line below for JSON format
    // format: format.json(),
    transports: [new transports.Console()]
});

logger.info('Hello world');
logger.debug('Debugging info');
module.exports = logger;
