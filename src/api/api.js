import { ServerUrl } from "./config";

const patchRequest = async (url, data) => {
    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await response.json()
}

const getRequest = async url => {
    let response = await fetch(url);
    return await response.json();
}

const postRequest = async (url, data) => {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return response.json()
}

export const SignUpApi = async data => {
    return await postRequest(`${ServerUrl}/users`, data)
};