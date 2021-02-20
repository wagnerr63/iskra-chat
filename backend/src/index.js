const express = require('express');
const cors = require('cors');
const socketio = require('socket.io')
const handleSocket = require('./socket');
const path = require('path');

require('express-async-errors');
require("dotenv").config();

//const routes = require('./routes');
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
const app = express();
app.use(cors(corsOptions))
const server = require('http').createServer(app);
const io = socketio(server, {
    cors: {
      origin: '*',
    }
});

app.use(express.json());

app.use(express.static( path.join(__dirname, 'app', 'views') ));
app.set('views', path.join(__dirname, 'app', 'views') );
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/',(request, response) => {
    return response.json({ hello: "Olá"});
});
//app.use(routes);

io.on('connection', handleSocket);

app.use((error, request, response, next) => {
    console.log('#### Error Handler');
    console.log(error);
    response.sendStatus(500);
});

server.listen(process.env.PORT || 3030, () => console.log('🔥 Server started at http://localhost:3030'));