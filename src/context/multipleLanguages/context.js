import { createContext } from "react";

const initialState = {
    language: 'russian',
    setLanguage: () => {},
    t: '',
    // setT: () => {}
}

export default createContext(initialState);