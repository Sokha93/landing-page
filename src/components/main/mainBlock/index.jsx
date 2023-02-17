import React, { useState } from 'react';
import { Container } from '@mui/material';

const AddPosts = () => {

    const [arr, setArr] = useState([]);
    const [value, setValue] = useState('');

    const result = arr.map((element, index) => {
        return(
            <p key={index}>
                {element}
            </p>
        )
    })  

    const add = () => {
        setArr([...arr, value])
        setValue('')
    }


    return (
        <Container>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
            <button onClick={add}>post</button>
            {result}
        </Container>
    )
};

export default AddPosts;