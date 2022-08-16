# Pino-Pretty custom configuration in Fastify-CLI

Sample demonstration how to configure **Pino-Pretty** in **Fastify-cli** using `--logging-module`

This example is for demonstration only, ***don't use it in production***.

## Installation
run
npm install

## Usage
run
`fastify start --pretty-logs --logging-module="./custom_logger.js" --log-level=info  plugin.js`

visit http://localhost:3000/ 

you will see logs in your terminal following custom configuration

## Configuration 
Edit `custom_logger.js` to modify Pino-Pretty configuration.
