import Network from '../lib/network'

export default class Campaign {
    constructor() {}

    static getAll() {
        return new Promise(resolve => {
            Network.request('/campaigns')
                .then((response) => {
                    resolve(response.Campaigns);
                });
        });
    }
}