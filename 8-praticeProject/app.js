var express = require('express');
const { cond } = require('lodash');
var app = express();
var path = require('path');

var PORT = 4000;

app.set("view options", { layout: false });
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/gallery', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/gallery.html'));
});


app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/contact.html'));
});


app.listen(PORT, function () {
    console.log(`Server listening at ${PORT}`);
});


