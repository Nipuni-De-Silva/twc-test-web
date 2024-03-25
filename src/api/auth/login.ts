import api from "../axios";
import { addTokenToApi, getTokenFromLocalStorage } from "./token";


const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms));


async function login(email: string, password: string) {
    await sleep(1000);
    const response = await api.post('/login', {
        email: email,
        password: password
    })
    const token = response.data.token;
    addTokenToApi(token)
    return response
    // .then(function (response) {
    //     console.log(response.data);
    //     const token = response.data.token;
    //     addTokenToApi(token)
    //     return response
    // })
    // .catch(function (error) {
    //     throw error
    // });
}

export default login
