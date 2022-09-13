import { useContext } from "react";
import AuthContext from './context';

const AuthHook = () => {
    return useContext(AuthContext);
};

export default AuthHook;