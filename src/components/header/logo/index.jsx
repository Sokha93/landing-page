import React from 'react';
import { LogoBlock } from '../../../styles/styledComponents/header';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div onClick={() => handleClick()} style={{cursor: 'pointer'}}>
            <LogoBlock>
                stam
            </LogoBlock>
        </div>
    )
};

export default Logo;