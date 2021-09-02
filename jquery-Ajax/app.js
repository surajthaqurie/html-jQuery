const express = require('express');
const app = express();
const path = require('path');

const port = 4000;


app.set("view options", { layout: false });
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
