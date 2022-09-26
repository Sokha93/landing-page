import React, { useState, useEffect } from 'react';
import { Container } from '@mui/system';
import { FormBlock, InputField, Form, InputButton } from '../../styles/styledComponents/register';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ApiUrl } from '../../api/config';

const classes = {
    registerHeader: {
        textAlign: 'center',
        marginTop: '50px',
        textTransform: 'uppercase',
        letterSpacing: '1.5px'
    }
}

const Registerpage = () => {

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


    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15, 'must`nt be more than 15 characters')
            .min(4, 'must be 4 characters at least')
            .required('required'),
        lastName: Yup.string()
            .max(15, 'must`nt be more than 15 characters')
            .min(4, 'must be 4 characters at least')
            .required('required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('required'),
        password: Yup.string()
            .min(6, 'at least 6 characters')
            .max(15, 'mustn`t be more than 15 characters')
            .required('Required')

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })


    return (
        <Container>
            <h1 style={ classes.registerHeader }>Register</h1>
            <FormBlock>
                <Form onSubmit={ formik.handleSubmit }>
                    <label htmlFor="firstName">First name</label>
                    <InputField
                        id='firstName'
                        type='text'
                        placeholder='first name'
                        name='firstName'
                        // onChange={ formik.handleChange}
                        // value={ formik.values.firstName }
                        // onBlur={ formik.handleBlur}
                        { ...formik.getFieldProps('firstName') }
                    />
                    { formik.touched.firstName && formik.errors.firstName ? <div>{ formik.errors.firstName }</div> : null }
                    <label htmlFor="lastName">Last name</label>
                    <InputField
                        id='lastName'
                        type='text'
                        placeholder='last name'
                        // name='lastName'
                        // onChange={ formik.handleChange }
                        // value={ formik.values.lastName }
                        // onBlur={ formik.handleBlur}
                        { ...formik.getFieldProps('lastName') }
                    />
                    { formik.touched.lastName && formik.errors.lastName ? <div>{ formik.errors.lastName }</div> : null }
                    <label htmlFor="email">Email</label>
                    <InputField
                        type='email'
                        id='email'
                        placeholder='email'
                        // name='email'
                        // onChange={ formik.handleChange}
                        // value={ formik.values.email }
                        // onBlur={ formik.handleBlur }
                        { ...formik.getFieldProps('email') }
                    />
                    { formik.touched.email && formik.errors.email ? <div>{ formik.errors.email }</div> : null }
                    <label htmlFor="password">Password</label>
                    <InputField
                        id='password'
                        placeholder='password'
                        type='password'
                        // name='password'
                        // onChange={ formik.handleChange }
                        // value={ formik.values.password }
                        // onBlur={ formik.handleBlur }
                        { ...formik.getFieldProps('password') }
                    />
                    { formik.touched.password && formik.errors.password ? <div>{ formik.errors.password }</div> : null }
                    <InputButton type='button' >submit</InputButton>
                </Form>
            </FormBlock>
        </Container>
    )
};

export default Registerpage;