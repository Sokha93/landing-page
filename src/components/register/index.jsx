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

const classes = {
    registerHeader: {
        textAlign: 'center',
        marginTop: '50px',
        textTransform: 'uppercase',
        letterSpacing: '1.5px'
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

    useEffect(() => {
        const fetchData = async () => {
            let result = await CheckLogin(login);
            if(result.length > 0) {
                setTextError('login exists, try to use another')
            } else {
                setTextError(null)
            }

            if(login.length > 3) {
                fetchData()
            }
        }
    }, [login])


    const handleSubmit = async event => {
        setIsLoading(true);
        setLoadingShow(true);

        let result = await signUp({ name, login, password: md5(password) });
        if(result) {
            setIsLoading(false);
            setName('')
            setLogin('');
            setPassword('')

        };
        console.log(result);
        
    }

    return (
        <>
            <h1 style={ classes.registerHeader }>Register</h1>
            <FormBlock>
                <Form 
                    onSubmit={ handleSubmit }
                >
                    {TextError &&  <p>{TextError}</p> }
                    <label htmlFor="firstName">Name</label>
                    <InputField
                        id='name'
                        type='text'
                        placeholder='name'
                        name='name'
                        onChange={ e => setName(e.target.value) }
                        value={ name }
                        required
                    />
                    <label htmlFor="lastName">Login</label>
                    <InputField
                        id='login'
                        type='text'
                        placeholder='login'
                        name='login'
                        onChange={ e => setLogin(e.target.value) }
                        value={ login }
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <InputField
                        id='password'
                        placeholder='password'
                        type='password'
                        name='password'
                        onChange={ e => setPassword(e.target.value) }
                        value={ password }
                        required
                    />
                        <InputButton
                            type='button' 
                            // onClick={() => handleSubmit()}
                            disabled
                        >
                            submit
                        </InputButton>
                        <div className={ `sss ${loadingShow && 'active'}` }>
                            {isLoading ? <p>...loading</p> :
                                <div>You`re sucessfully signed up! click button below to go next
                                    <button onClick={() => navigate('/')}>CLICK</button>
                                </div>
                            }
                        </div>
                        
                </Form>
            </FormBlock>
        </>
    )
};

export default Registerpage;