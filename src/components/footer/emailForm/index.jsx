import React, { useEffect, useState } from 'react';
import { ServerUrl } from '../../../api/config';
import axios from 'axios';

const EmailForm = () => {

    const [state, setState] = useState();
    useEffect(() => {
        getUrl();
    })
    
    const getUrl = async (blob) => {
        return await axios(`https://dog.ceo/api/breeds/image/random`, {
            method: 'GET',
            body: blob
        })
        .then(res=>setState(res.json))
        .then(res=>console.log(res))
    }

    
    return(
        <>
        {`${state}sdfsdfsdf`}
            EmailForm
        </>
    )
};

export default EmailForm;