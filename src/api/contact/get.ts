import api from "../axios";
import { addTokenToApi, getTokenFromLocalStorage } from "../auth/token";


const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms));


async function getContactList() {
    await sleep(1000);
    const response = await api.get('/contacts')
    console.log(response)
    return response.data


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

export default getContactList