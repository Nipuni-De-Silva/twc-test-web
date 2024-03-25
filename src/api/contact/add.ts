import api from "../axios";

export interface Contact {
    fullName: string,
    email: string,
    phoneNumber: string,
    gender: string
}

const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms));


async function addNewContact(contact: Contact) {
    await sleep(1000);
    const response = await api.post('/register', {
        fullName: contact.fullName,
        email: contact.email,
        phoneNumber: contact.phoneNumber,
        gender: contact.gender
    })
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

export default addNewContact