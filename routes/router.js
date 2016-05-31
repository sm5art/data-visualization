'use strict';

var Crawler = require("../bin/crawler").Crawler;


module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    app.get('/list',function(req,res){
      new Crawler("http://www.youtube.com/watch?v=7qXSSQNS5VM",2,(nodes,links)=>{
        console.log(nodes,links)
        res.send(JSON.stringify([nodes,links]));
      });
    });

};
