import React, { useState, useRef, useEffect } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import {
    MenuIcons,
    Desktopview,
    Mobileview,
    DropDown,
    Triangle
} from '../../../styles/styledComponents/header';

const HeaderMenu = () => {

    const [isActive, setIsActive] = useState(false);
    const clickOutside = useRef();

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.addEventListener('mousedown', handleClick);
        }
    }, [])

    const handleClick = (e) => {
        if(clickOutside.current?.contains(e.target)) {
            return
        };
        setIsActive(false);
    }
    return (
        <MenuIcons>
            <Desktopview>
                <div onClick={() => setIsActive(true)}>
                    <LoginIcon style={{width: 32, height: 32, cursor: 'pointer'}}/>
                </div>
                <DropDown active={ isActive } ref={ clickOutside }>
                    asdasdasdasd
                </DropDown>
            </Desktopview>
            <Mobileview>
                <MenuIcon style={{width: 32, height: 32, cursor: 'pointer'}}/>
            </Mobileview>
        </MenuIcons>
    )
};

export default HeaderMenu;