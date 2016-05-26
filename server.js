//dependencies
var express = require('express');
path = require('path'),
app = express(),
port = 1234,
bodyParser = require('body-parser');

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

//set views and engines and routing
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('./routes/router')(app);
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});
app.listen(port);
console.log("server running on port "+port)
