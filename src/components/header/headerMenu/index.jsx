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
import { Link } from 'react-router-dom';

const styles = {
    loginIconStyle: {
        width: 32,
        height: 32,
        cursor: 'pointer'
    },
    menuIconStyle: {
        width: 32,
        height: 32,
        cursor: 'pointer'
    },
    closeIconStyle: {
        color: '#000'
    }
}

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
                    <LoginIcon style={ styles.loginIconStyle }/>
                </div>
                <DropDown active={ openDesktopModal } ref={ clickOutside }>
                    <div>
                        <Link 
                            to={'/register'}
                            onClick={ () => setOpenDesktopModal(false) }
                        >
                            register
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={'/login'}
                            onClick={ () => setOpenDesktopModal(false) }
                        >
                            login
                        </Link>
                    </div>
                </DropDown>
            </Desktopview>
            <Mobileview>
                <div onClick={ () => setOpenMobileModal(true) }>
                    <MenuIcon style={ styles.menuIconStyle }/>
                </div>
                <MobileModal opened={ openMobileModal }>
                    <div style={ styles.closeIconStyle } onClick={ () => setOpenMobileModal(false) }><CloseIcon/></div>
                    <Divider variant='middle'/>
                    <div>
                        <Link
                            to={'/register'}
                            onClick={ () => setOpenMobileModal(false) }
                        >
                            register
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={'/login'}
                            onClick={ () => setOpenMobileModal(false) }
                        >
                            login
                        </Link>
                    </div>
                </MobileModal>
            </Mobileview>
        </MenuIcons>
    )
};

export default HeaderMenu;