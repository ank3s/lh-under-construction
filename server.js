const app = require('./app');
const http = require('http');

http.createServer(app).listen(process.env.PORT);

console.log('App is running…');