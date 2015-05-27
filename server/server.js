import express from 'express';
import bodyParser from 'body-parser';

const port = 8777;
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + './../public'));

app.listen(port, function(){
    console.log(`listening on ${port}`)
});