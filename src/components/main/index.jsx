import React from 'react';
import { Container } from '@mui/material';

const mainStyle = {
    textAlign: 'center',
    marginTop: '50px'
}

const Main = () => {

    
    return (
        <Container>
            <div style={ mainStyle }>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>click</button>
            </div>
        </Container>
    )
};

export default Main;