import React, { useState, useRef, useEffect } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import {
    MenuIcons,
    Desktopview,
    Mobileview,
    DropDown,
    MobileModal
} from '../../../styles/styledComponents/header';

const HeaderMenu = () => {

    const [openDesktopModal, setOpenDesktopModal] = useState(false);
    const [openMobileModal, setOpenMobileModal] = useState(false);
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
        setOpenDesktopModal(false);
    }
    return (
        <MenuIcons>
            <Desktopview>
                <div onClick={() => setOpenDesktopModal(true)}>
                    <LoginIcon style={{width: 32, height: 32, cursor: 'pointer'}}/>
                </div>
                <DropDown active={ openDesktopModal } ref={ clickOutside }>
                    <div>register</div>
                    <div>log in</div>
                </DropDown>
            </Desktopview>
            <Mobileview>
                <div onClick={ () => setOpenMobileModal(true) }>
                    <MenuIcon style={{width: 32, height: 32, cursor: 'pointer'}}/>
                </div>
                <MobileModal opened={ openMobileModal }>
                    <div style={{color: '#000'}} onClick={ () => setOpenMobileModal(false) }><CloseIcon/></div>
                    <Divider variant='middle'/>
                </MobileModal>
            </Mobileview>
        </MenuIcons>
    )
};

export default HeaderMenu;