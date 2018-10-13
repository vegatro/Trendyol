import Network from '../lib/network'

export default class Category {
    constructor() {}

    static getAll() {
        return new Promise(resolve => {
            Network.request('/categories')
                .then((response) => {
                    resolve(response.Categories);
                });
        });
    }
}