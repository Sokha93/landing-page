import React, {useState, useEffect, Children} from 'react';
import { CheckToken, UpdateUserInfo } from '../../api/api';
import { AuthContext } from './context';


const AuthProvider = () => {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: {}
    })
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function FetchData() {
            let ls = localStorage.getItem('social-network-item');

            if(ls){
                let response = await CheckToken(ls);
                if(response.length > 0) {
                    if(Date.now < response[0].expirationTime){
                        const expirationTime = Date.now() + (60 * 60 * 24 * 15 * 1000);
                        const update = await UpdateUserInfo(response[0].id, JSON.stringify({'expiration-time': expirationTime}));
                        if(update) {
                            setAuth({
                                isAuth: true,
                                user: {
                                    id: response[0].id,
                                    name: response[0].name,
                                    login: response[0].login
                                }
                            })
                        }
                    }
                }
            }
            setLoading(false);
        }
        FetchData();
    }, []);

    const logout = () => {
        localStorage.removeItem('social-network-item'),
        setAuth({
            isAuth: false,
            user: {}
        })
    }

    return(
        <AuthContext.Provider value={{auth, setAuth, logout}}>
            {
               children
            }
        </AuthContext.Provider>
    )
};

export default AuthProvider;