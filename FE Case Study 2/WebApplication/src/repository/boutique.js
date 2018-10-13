import Network from '../lib/network'

export default class Boutique {
    constructor() {}

    static getAll(categoryType) {
        if(categoryType == -1)
            categoryType = '';

        return new Promise(resolve => {
            Network.request('/boutiques/' + categoryType)
                .then((response) => {
                    resolve(response.Boutiques);
                });
        });
    }
}