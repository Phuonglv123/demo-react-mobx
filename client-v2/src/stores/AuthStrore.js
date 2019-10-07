import {decorate, observable} from "mobx";

class AuthStrore {
    loading = false;
    error = null;
    res = null;
}

decorate(ProductStore, {
    loading: observable,
    error: observable,
    res: observable,
});


export default new AuthStrore();
