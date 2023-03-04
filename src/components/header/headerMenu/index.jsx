import React, { useState, useRef, useEffect } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import {
    MenuIcons,
    Desktopview,
    Mobileview,
    DropDown,
    MobileModal,
    DesktopLinks,
    MobileLinks,
    StyledLink,
    LogoBlock,
    LogoSpan,
    CloseButtonBlock,
    CloseButton,
    MobileLogo
} from '../../../styles/styledComponents/header';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()

    const handleClose = () => {
        navigate('/');
        setOpenMobileModal(false)
    }
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

    const obj = [
        {id: 1, name: 'register'},
        {id: 2, name: 'login'},
        {id: 3, name: 'about us'},
        {id: 4, name: 'news'},
        {id: 5, name: 'contacts'},
        {id: 6, name: 'interesting'}
    ]
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
                    <MobileLogo onClick={ handleClose }>
                        <LogoBlock mobileLogo>
                            SN<LogoSpan mobileSpan>project</LogoSpan>
                        </LogoBlock>
                    </MobileLogo>
                    {
                        obj.map((elem, index) => (
                            <MobileLinks key={index}>
                                <StyledLink
                                    to={'/'}
                                    onClick={() => setOpenMobileModal(false)}
                                >
                                    {elem.name}
                                </StyledLink>
                            </MobileLinks>
                        ))
                    }
                    <CloseButtonBlock>
                        <CloseButton onClick={() => setOpenMobileModal(false)}>CLOSE</CloseButton>
                    </CloseButtonBlock>
                </MobileModal>
            </Mobileview>
        </MenuIcons>
    )
};

export default HeaderMenu;