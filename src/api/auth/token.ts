import api from "../axios";

export function addTokenToApi(token: string) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
    localStorage.setItem('token', token);
}

export function removeTokenFromApi() {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem('token');
}

export function getTokenFromLocalStorage() {
    return localStorage.getItem('token')
}