const app = require('./app');
const http = require('http');

http.createServer(app).listen(app.get('port'));

console.log('App is running…');