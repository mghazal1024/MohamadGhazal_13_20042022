import axios from "axios";


const Axios = (action, dataForm = {}, token = '') => {
    return new Promise((resolve, reject) => {
        const url = `http://${window.location.hostname}:3001/api/v1/user/`;

        const update = () => {
            axios({
                method: 'put',
                url: `${url}profile`,
                data: {
                    ...dataForm,
                },
                headers: {
                    authorization: token,
                },
            })
                .then((res) => {
                    const userData = {
                        ...res.data.body,
                        token,
                        status: 'connect',
                    };
                    resolve(userData);
                })
                .catch((err) => {
                    reject(err);
                });
        };


        const profile = (token) => {
            axios({
                method: 'post',
                url: `${url}profile`,
                headers: {
                    authorization: token,
                },
            })
            .then((res) => {
                const userData = {
                    ...res.data.body,
                    token,
                    status: 'connect',
                };
                resolve(userData);
            })
            .catch((err) => {
                reject(err)
            });
        };


            const login = () => {
                axios({
                    method: 'post',
                    url: `${url}login`,
                    data: {
                        ...dataForm,
                    },
                })
                .then((res) => profile(`Bearer ${res.data.body.token}`))
                .catch((err) => reject(err));
            };


            switch (action) {
                case 'update':
                    update();
                    break;
                case 'profile':
                    profile(token);
                    break;
                case 'login':
                    login();
                    break;
                default:
                    reject('Cannot find action!');
            }
    });
};

export default Axios



