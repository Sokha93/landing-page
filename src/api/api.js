import { ServerUrl } from "./config";
import axios from "axios";

export const signUp = async data => {
    return await axios.post(`${ServerUrl}/users`, data)
    .then(res => {
        return res.data
    })
}