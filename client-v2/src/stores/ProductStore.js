import {autorun, decorate, observable} from "mobx";
import ItemServices from "../services/ItemServices";

class ProductStore {
    loading = false;
    error = null;
    AllCategories = [];
    AllItem = [];

    async getCategoriesStrore() {
        this.loading = true;
        autorun(async () => {
            return await ItemServices.getCategories()
                .then(res => {
                    this.AllCategories = res;
                })
                .catch(e => {
                    console.log(e)
                })
        })
    }

    async getAllItemStore() {
        this.loading = true;
        autorun(async () => {
            return await ItemServices.getAllItem()
                .then(res => {
                    this.AllItem = res;
                })
                .catch(e => {
                    console.log(e)
                })
        })
    }

}

decorate(ProductStore, {
    loading: observable,
    error: observable,
    AllCategories: observable,
    AllItem: observable
});

export default new ProductStore();
