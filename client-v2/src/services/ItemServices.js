import BaseAPI from "./BaseAPI";

class ItemServices extends BaseAPI {

    async getCategories() {
        const res = await this.apiCall({
            url: '/categories',
            method: 'GET'
        });
        return res;
    }

    async getAllItem() {
        const res = await this.apiCall({
            url: 'items',
            method: 'GET'
        });
        return res;
    }

}

export default new ItemServices();
