import React, { useState, useEffect } from 'react';
import { Container } from '@mui/system';
import { FormBlock, InputField, Form, InputButton } from '../../styles/styledComponents/register';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SignUpApi, checkLoginApi } from '../../api/api';
import axios from 'axios';
import Loading from '../../assets/ui';
import md5 from 'md5';
import {useHistory} from 'react-router-dom';

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
    const [name,  setName] = useState('');
    const [login, setLogin] = useState('')
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [formTextError, setFormtextError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const result = checkLoginApi(login);
            if(result.length > 0) {
                setFormtextError('This login is busy')
            } else{
                setFormtextError(null);
            }
            if(result.length > 3) {
                fetchData();
            } else {
                setFormtextError(null);
            }
        };
        
    }, [login]);

    const handleChangeName = e => {
        setName({name: e.target.value})
    };

    const handleChangeSurname = e => {
        setLastName({lastName: e.target.value});
    };

    const handleChangeLogin = e => {
        setLogin({login: e.target.vale});
    };

    const handleChangePassword = e => {
        setPassword({password: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        const result = SignUpApi(JSON.stringify({"name": name, "last_name": lastName, "login": login, "password": md5(password)}));

        if(result) {
            setIsLoading(false);
        }
        console.log(result)
    }

    // const validate = values =>  {
    //     const errors = {};

    //     if(!values.firstName) {
    //         errors.firstName = 'Required';
    //     } else if (values.firstName.length < 5) {
    //         errors.firstName = 'must be at least 5 words'
    //     }

    //     if(!values.lastName) {
    //         errors.lastName = 'Required';
    //     } else if (values.lastName.length < 5) {
    //         errors.lastName = 'must be at least 5 words'
    //     }

    //     if(!values.email) {
    //         errors.email = 'Required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.firstName = 'Invalid email address'
    //     }

    //     if(!values.password) {
    //         errors.password = 'Required'
    //     } else if (values.password.length < 8) {
    //         errors.password = 'must be at least 8 characters'
    //     }

    //     return errors;
    // }

    // const HandleFormSubmit = async (e) => {
    //     let first_name, last_name, email, password;
    //     // e.preventDefault();
    //     setIsLoading(true);
    //     const result = await SignUpApi(JSON.stringify({
    //         "firstName": first_name,
    //         "lastName": last_name,
    //         "email": email,
    //         "password": password
    //     }))
    //     if(result)
    //     setIsLoading(false);

    //     console.log(result)
    // }


    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         firstName: '',
    //         lastName: '',
    //         password: ''
    //     },
    //     validationSchema: Yup.object({
    //         firstName: Yup.string()
    //         .max(15, 'must`nt be more than 15 characters')
    //         .min(4, 'must be 4 characters at least')
    //         .required('required'),
    //     lastName: Yup.string()
    //         .max(15, 'must`nt be more than 15 characters')
    //         .min(4, 'must be 4 characters at least')
    //         .required('required'),
    //     email: Yup.string()
    //         .email('Invalid email address')
    //         .required('required'),
    //     password: Yup.string()
    //         .min(6, 'at least 6 characters')
    //         .max(15, 'mustn`t be more than 15 characters')
    //         .required('Required')

    //     }),
    //     onSubmit: HandleFormSubmit()
    // })


    return (
        <Container>
            <h1 style={ classes.registerHeader }>Register</h1>
            <FormBlock>
                <Form 
                onSubmit={ handleSubmit }
                >
                    {formTextError && <div>{ formTextError }</div>}
                    <label htmlFor="firstName">First name</label>
                    <InputField
                        id='firstName'
                        type='text'
                        placeholder='first name'
                        name='firstName'
                        onChange={ handleChangeName }
                        value={ name }
                        required
                    />
                    <label htmlFor="lastName">Last name</label>
                    <InputField
                        id='lastName'
                        type='text'
                        placeholder='last name'
                        name='lastName'
                        onChange={ handleChangeSurname }
                        value={ lastName }
                        required
                    />
                    <label htmlFor="login">Email</label>
                    <InputField
                        type='text'
                        id='login'
                        placeholder='login'
                        name='login'
                        onChange={ handleChangeLogin }
                        value={ login }
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <InputField
                        id='password'
                        placeholder='password'
                        type='password'
                        name='password'
                        onChange={ handleChangePassword }
                        value={ password }
                        required
                    />
                    {
                        isLoading ?
                        <Loading /> :
                        <InputButton type='button' onClick={() => history.push('/')}>submit</InputButton>
                    }
                </Form>
            </FormBlock>
        </Container>
    )
};

export default Registerpage;