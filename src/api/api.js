import { ServerUrl } from "./config";
import axios from "axios";

const getRequest = async url => {
    return await axios.get(url).then(res => res.data)
}

export const signUp = async data => {
    return await axios.post(`${ServerUrl}/users`, data)
    .then(res => {
        return res.data
    })
}

export const CheckLogin = async login => {
    return await getRequest(`${ServerUrl}/users?login=${login}`)
}

export const CheckToken = async token => {
    return await getRequest(`${ServerUrl}/users?token=${token}`)
}

export const UpdateUserInfo = async (userID, data) => {
    return await axios.patch(`${ServerUrl}/users/${userID}`, data)
    .then((response) => {
        return response.data
    })
}

export const SignIn = async (login, password) => {
    return await getRequest(`${ServerUrl}/users?login=${login}&password=${password}`)
}