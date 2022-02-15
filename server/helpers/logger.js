const winston = require('winston');

const info = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

const error = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

module.exports = {
  info,
  error,
};
