import { createContext } from "react";

const initialState = {
    isAuth: false,
    user: {}
};

export default createContext(initialState);