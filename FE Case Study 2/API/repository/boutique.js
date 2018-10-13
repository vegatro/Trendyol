var fs      = require('fs');
var _       = require('lodash');
var utils   = require('../util/utils');

module.exports = {
    getAll: function() {
        var json = JSON.parse(fs.readFileSync('./json/boutique.json', 'utf8'));

        _.map(json, function(boutique){
            var today = new Date();

            boutique.ExpireDate = utils.randomDate(new Date(2018, today.getMonth(), today.getDate() + 7), today);

            return boutique;
        });

        return json;
    },
    get: function(categoryType) {
        var json = this.getAll();

        return _.filter(json, function(item) { return item.CategoryType == categoryType; });
    }
}