import React, { useState, useEffect } from 'react';
import { Container } from '@mui/system';
// import axios from 'axios';
import { FormBlock, InputField, Form, InputButton } from '../../styles/styledComponents/register';
// import useStyles from '../../styles/makeStyles/register';

const Registerpage = () => {
    // const classes = useStyles();

    return (
        <Container>
            <FormBlock>
                <Form action="POST">
                    <InputField type={'text'} placeholder={'first name'} defaultValue={ '' }/>
                    <InputField type={'text'} placeholder={'last name'} defaultValue={ '' }/>
                    <InputField type={'email'} placeholder={'email'} defaultValue={ '' }/>
                    <InputField type={'password'} placeholder={'password'} defaultValue={ '' }/>
                    <InputField type={'password'} placeholder={'check password'} defaultValue={ '' }/>
                    <InputButton>submit</InputButton>
                </Form>
            </FormBlock>
        </Container>
    )
};

export default Registerpage;