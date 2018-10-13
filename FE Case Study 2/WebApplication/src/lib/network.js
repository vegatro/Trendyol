import $ from 'jquery'
import Config from '../config'

export default class Network {
    static request(url) {
        return new Promise(resolve => {
            $.getJSON(Config.ApiUrl + url, function(response) {
                resolve(response);
            });
        });
    }
}