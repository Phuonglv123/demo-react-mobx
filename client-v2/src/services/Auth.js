import axios from 'axios';

class Auth {
    constructor() {
        this.loadUser();
    }

    async login(params) {
        try {
            const res = await axios({
                method: 'POST',
                header: {
                    'Content-type': 'application/json',
                },
                url: `login`,
                data: params,
                validateStatus: status => {
                    return true;
                },
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    logout() {
        localStorage.removeItem('AUTH');
    }

    saveUser(user) {
        try {
            if (user) {
                localStorage.setItem('AUTH', JSON.stringify(user));
            }
        } catch (e) {
            console.log(e);
        }
    }

    loadUser() {
        try {
            const token = localStorage.getItem('AUTH');
        } catch (e) {
            console.log(e);
        }

    }
}

export default new Auth();
