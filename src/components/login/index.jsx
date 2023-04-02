import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import md5 from 'md5';
import AuthHook from '../../context/auth/hook';
import { SignIn, UpdateUserInfo } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const {setAuth} = AuthHook();
    console.log(setAuth)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = async e => {
        e.preventDefault();
        setShowLoading(true);
        const result = await SignIn(login, md5(password));
        if(result.length > 0) {
            // setAuth({
            //     isAuth: true,
            //     user: {
            //         id: result[0].id,
            //         name: result[0].name,
            //         login: result[0].login
            //     }
            // })
            const token = md5(`${result[0].name}-${login}-${Date.now()}`);
            const expirationTime = Date.now() + (60 * 60 * 24 * 15 * 1000);

            const update = await UpdateUserInfo(result[0].id, JSON.stringify({'token': token, 'expirationTime': expirationTime}));
            if(update){
                localStorage.setItem('social-network-token', update.token)
            }
            navigate('/')
        }else{
            setErrorText('invalid login or password');
            setShowLoading(false);
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleFormSubmit}>
                <h1>login</h1>
                {errorText && <div>{errorText}</div>}
                <input
                    type="text"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    placeholder={'login'} 
                />
                <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={'password'}
                />
                <button type='submit'>submit</button>
                {showLoading && 'loading ......'}
            </form>
        </div>
    )
};

export default LoginPage;