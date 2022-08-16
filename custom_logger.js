const pino = require("pino");
module.exports = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      ignore: "pid,req.hostname,req.remoteAddress",
      translateTime: "yyyy-mm-dd HH:MM:ss.l",
    },
  },
});
