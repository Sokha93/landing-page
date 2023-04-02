import React, { useState, useEffect } from 'react';
import {
    FormBlock,
    InputField,
    Form,
    InputButton,
    MainBlock
} from '../../styles/styledComponents/register';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import md5 from 'md5';
import {useNavigate} from 'react-router-dom';
import { signUp, CheckLogin } from '../../api/api';
import './style.css';
import { Loading } from '../../ui/loading';
import useLanguage from '../../context/multipleLanguages/hook';

const classes = {
    registerHeader: {
        textAlign: 'center',
        marginTop: 0,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        fontSize: '22px'
    }
}

const Registerpage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [loadingShow, setLoadingShow] = useState(false);
    const [name,  setName] = useState('');
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('');
    const [TextError, setTextError] = useState(null);
    const navigate = useNavigate();
    const {t} = useLanguage()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         let result = await CheckLogin(login);
    //         if(result.length > 0) {
    //             setTextError('login exists, try to use another')
    //         } else {
    //             setTextError(null)
    //         }

    //         if(login.length > 3) {
    //             fetchData()
    //         }
    //     }
    // }, [login])


    const handleSubmit = async event => {
        setIsLoading(true);
        setLoadingShow(true);

        let result = await signUp({ name, login, password: md5(password) });
        if(result) {
            setIsLoading(false);
            setName('')
            setLogin('');
            setPassword('');
            navigate('/')

        };
        console.log(result);
        
    }

    return (
        <div style={{padding: '40px'}}>
            <h1 style={ classes.registerHeader }>{t.registration}</h1>
            <FormBlock>
                <Form 
                    onSubmit={ handleSubmit }
                >
                    {TextError &&  <p>{TextError}</p> }
                    <div className='textbox'>
                        <input
                            id='name'
                            type='text'
                            placeholder={t.add_name}
                            name='name'
                            onChange={ e => setName(e.target.value) }
                            value={ name }
                            required
                        />
                        <label htmlFor="firstName" className='labels'>{t.name}</label>
                    </div>
                    <div className='textbox'>
                        <input
                            id='login'
                            type='text'
                            placeholder={t.add_login}
                            name='login'
                            onChange={ e => setLogin(e.target.value) }
                            value={ login }
                            required
                        />
                        <label htmlFor="lastName" className='labels'>{t.login}</label>
                    </div>
                    <div className='textbox'>
                        <input
                            id='password'
                            placeholder={t.add_password}
                            type='password'
                            name='password'
                            onChange={ e => setPassword(e.target.value) }
                            value={ password }
                            required
                        />
                        <label htmlFor="password" className='labels'>{t.password}</label>
                    </div>
                    <InputButton
                        type='button' 
                        onClick={() => handleSubmit()}
                    >
                        submit
                    </InputButton>
                        
                </Form>
            </FormBlock>
        </div>
    )
};

export default Registerpage;