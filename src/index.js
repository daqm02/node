const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index.js');

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//middlewares


//routes
app.use(routes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//listening server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});