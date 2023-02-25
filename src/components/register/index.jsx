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
import { signUp } from '../../api/api';
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
    const [formTextError, setFormtextError] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = async event => {
        // event.preventDefault();
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
                            onClick={() => handleSubmit()}
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