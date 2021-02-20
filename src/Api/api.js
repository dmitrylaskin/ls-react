const axios = require('axios');

const baseURL = 'https://loft-taxi.glitch.me/'

export const authAPI = {
    getLogin(email, password) {
        return axios.post(`${baseURL}auth`, {email, password})
    },
    getSignUp(email, password, name, surname) {
        return axios.post(`${baseURL}register`, {email, password, name, surname})
    }
}

export const profileAPI = {
    setPaymentData(cardNumber, expiryDate, cardName, cvc, token) {
        return axios.post(`${baseURL}card`, {cardNumber, expiryDate, cardName, cvc, token})
    }
}
export const mapAPI = {
    getAddresses() {
        return axios.get(`${baseURL}addressList`)
    },
    getCoordinates(from, to) {
        return axios.get(`https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`)
    }
}

