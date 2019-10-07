import {decorate, observable, action} from "mobx";
import Auth from "../services/Auth";

class AuthStore {
    loading = false;
    error = null;
    res = null;

    user = {
        username: '',
        password: '',
    };

    setUsername(username) {
        this.user.username = username;
    }

    setPassword(password) {
        this.user.password = password;
    }

    onChange(value, name) {
        switch (name) {
            case 'username':
                return this.user.username = value;
            case 'password':
                return this.user.password = value;
            default:
        }
    }

    async login({username, password}) {
        this.loading = true;
        this.error = undefined;
        return await Auth.login({username, password})
            .then(res => {
                Auth.saveUser(res.token);
            })
            .catch(error => {
                console.log(error)
            })
    }
}

decorate(AuthStore, {
    loading: observable,
    error: observable,
    res: observable,
    user: observable,
    setUsername: action,
    setPassword: action,
    onChange: action,
    login: action,
});


export default new AuthStore();
