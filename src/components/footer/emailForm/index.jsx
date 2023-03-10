import React, { useEffect, useState } from 'react';
import useFetch from './usefetch';

const EmailForm = () => {
    const [data, setData] =useState(null);
    
    // const {data, loading, error} = useFetch(`https://dog.ceo/api/breeds/list/all`)

    // if (loading) return <h1>LOADIng</h1>
    // if(error)  console.log(error)

    // useEffect(()=> {
    //     fetch(`https://dog.ceo/api/breed/hound/list`, {
    //         method: 'GET'
    //     })
    //     .then(resp => resp.json())
    //     .then(response => setData(response.message))
    //     .then(res=> console.log(res.message))
    // }, [data])


    return(
        <>

        {/* <img src={data} width={500} alt="" /> */}
        </>
    )
};

export default EmailForm;