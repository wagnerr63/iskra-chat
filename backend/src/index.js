const express = require('express');
const path = require('path');

require('express-async-errors');
require("dotenv").config();

//const routes = require('./routes');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());

app.use(express.static( path.join(__dirname, 'app', 'views') ));
app.set('views', path.join(__dirname, 'app', 'views') );
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/',(request, response) => {
    return response.render('home.html');
});
//app.use(routes);

io.on('connection', socket => {
    console.log('socket');
});

app.use((error, request, response, next) => {
    console.log('#### Error Handler');
    console.log(error);
    response.sendStatus(500);
});

app.listen(process.env.PORT || 3030, () => console.log('🔥 Server started at http://localhost:3030'));