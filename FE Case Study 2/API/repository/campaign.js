var fs = require('fs');

module.exports = {
    getAll: function() {
        var json = JSON.parse(fs.readFileSync('./json/campaign.json', 'utf8'));

        return json;
    }
}