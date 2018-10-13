var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var trendyol   = require('./repository/trendyol');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/categories', function(req, res) {
    var result = trendyol.Category.getAll();

    res.json({ Categories: result });   
});

router.get('/boutiques', function(req, res) {
    var result = trendyol.Boutique.getAll();

    res.json({ Boutiques: result });   
});

router.get('/boutiques/:categoryType', function(req, res) {
    var result = trendyol.Boutique.get(req.params.categoryType);

    res.json({ Boutiques: result });   
});

router.get('/campaigns', function(req, res) {
    var result = trendyol.Campaign.getAll();

    res.json({ Campaigns: result });   
});

app.use('/trendyol', router);

app.listen(port);

console.log('Server is running on port ' + port);