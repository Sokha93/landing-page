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
    MobileModal,
    DesktopLinks,
    MobileLinks,
    StyledLink
} from '../../../styles/styledComponents/header';
import { Link } from 'react-router-dom';

const styles = {
    loginIconStyle: {
        width: 28,
        height: 28,
        cursor: 'pointer',
        color: 'bdbdbf',
        '&:hover': {
            color: '#fff !important'
        }
    },
    menuIconStyle: {
        width: 32,
        height: 32,
        cursor: 'pointer',
    },
    closeIconStyle: {
        color: '#fff',
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
                    <DesktopLinks>
                        <StyledLink 
                            to={'/register'}
                            onClick={ () => setOpenDesktopModal(false) }
                        >
                            Sign up
                        </StyledLink>
                    </DesktopLinks>
                    <DesktopLinks>
                        <StyledLink
                            to={'/login'}
                            onClick={ () => setOpenDesktopModal(false) }
                        >
                            Sign in
                        </StyledLink>
                    </DesktopLinks>
                </DropDown>
            </Desktopview>

            <Mobileview>
                <div onClick={ () => setOpenMobileModal(true) }>
                    <MenuIcon style={ styles.menuIconStyle }/>
                </div>
                <MobileModal opened={ openMobileModal }>
                    <div style={ styles.closeIconStyle } onClick={ () => setOpenMobileModal(false) }><CloseIcon/></div>
                    <Divider variant='middle'/>
                    <MobileLinks>
                        <Link
                            to={'/register'}
                            onClick={ () => setOpenMobileModal(false) }
                        >
                            register
                        </Link>
                    </MobileLinks>
                    <div>
                        <MobileLinks>
                            <Link
                                to={'/login'}
                                onClick={ () => setOpenMobileModal(false) }
                            >
                                login
                            </Link>
                        </MobileLinks>
                        <MobileLinks>
                            <Link
                                to={'/'}
                                onClick={ () => setOpenMobileModal(false) }
                            >
                                О нас
                            </Link>
                        </MobileLinks>
                        <MobileLinks>
                            <Link
                                to={'/'}
                                onClick={ () => setOpenMobileModal(false) }
                            >
                                Новости
                            </Link>
                        </MobileLinks>                        
                        <MobileLinks>
                            <Link
                                to={'/'}
                                onClick={ () => setOpenMobileModal(false) }
                            >
                                Контакты
                            </Link>
                        </MobileLinks>
                        <MobileLinks>
                            <Link
                                to={'/'}
                                onClick={ () => setOpenMobileModal(false) }
                            >
                                Интересно
                            </Link>
                        </MobileLinks>
                    </div>
                </MobileModal>
            </Mobileview>
        </MenuIcons>
    )
};

export default HeaderMenu;