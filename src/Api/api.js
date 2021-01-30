const axios = require('axios');

const baseURL = 'https://loft-taxi.glitch.me/'

export const authAPI = {
    getLogin(email, password) {

        let result = axios.post(`${baseURL}auth`, {email: email, password: password})

        return result
    },
    getSignUp(email, password, name, surname) {
        let result = axios.post(' https://loft-taxi.glitch.me/register', {email, password, name, surname})

        return result
    }
}
