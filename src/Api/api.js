const axios = require('axios');

const baseURL = 'https://loft-taxi.glitch.me/'

export const authAPI = {
    getLogin(email, password) {

        let result = axios.post(`${baseURL}auth`, {email: email, password: password})

        return result
    },
    getSignUp(email, password, name, surname) {

        let result = axios.post(`${baseURL}register`, {email, password, name, surname})

        return result
    }
}

export const profileAPI = {
    setPaymentData(cardNumber, expiryDate, cardName, cvc, token) {
        let result = axios.post(`${baseURL}card`, {cardNumber, expiryDate, cardName, cvc, token})

        return result
    }
}
export const mapAPI = {
    getAddresses() {
        let result = axios.get(`${baseURL}addressList`)

        return result
    },
    getCoordinates(from, to) {

        let result = axios.get(`https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`)


        return result
    }
}

