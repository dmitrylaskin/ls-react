import React from 'react';

const Myxhr = () => {

    let sendRequest = (uername, password) => {
        return new Promise((resolve,reject) => {

            let xhr = new XMLHttpRequest()
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
            xhr.responseType = 'json'

            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(xhr.response)
                    console.log(xhr.status)
                    console.log(typeof xhr.status)
                } else {
                    resolve(xhr.response)
                }
            }
            xhr.onerror = () => {
                reject(xhr.response)
            }
            xhr.send()
        })
    }
    sendRequest()
        .then(data =>console.log(data))
        .catch(error => console.log(error))


    return (
        <div>
            XHR
        </div>
    );
};

export default Myxhr;
