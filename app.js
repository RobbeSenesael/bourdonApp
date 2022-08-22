var express = require('express'),
    port = process.env.PORT || 8080;
var app = express();
const path = require('path');
app.listen(port);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.render("index.ejs");
})

app.get('/bourdon', function (req, res) {
    res.render("bourdon.ejs");
})