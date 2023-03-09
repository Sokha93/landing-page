import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
export const MainBlock = styled.div`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const breathe = keyframes`
    0%{
        opacity: 0;
        translate: 0 50px;
    }
    100%{
        opacity: 1;
    }
`

export const MenuAndSelect = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 699px){
        display: flex;
        justify-content: flex-end;
    }

`;

export const LogoBlock = styled.div`
    letter-spacing: .8px;
    color: #bdbdbf;
    font-size: 18px;
    transition: all .3s;
    cursor: pointer;
    &:hover {
        color: #fff
    }
    @media(max-width: 699px){
        padding: ${props => props.mobileLogo ? '8px 16px' : null};
        font-size: ${props => props.mobileLogo ? '28px' : '18px'};
    }
`;

export const LogoSpan = styled.span`
    font-size: 8px;
    margin-left: 4px;
    @media(max-width: 699px){
        font-size: ${props => props.mobileSpan ? '12px' : '8px'};
    }
`;

export const Navbar = styled.nav`
    float: right;
    & > ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    & > ul > li {
        display: inline-block;
        margin-right: 50px;
        /* height: 25px; */
    }

    &> ul> li > a {
        text-decoration: none;
        color: #bdbdbf;
        background-position: center center;
        font-size: 14px;
        transition: all 0.5s;
        animation: ${breathe} 0.3 backwards;

        &:hover {
            color: #fff;
            transition: all 0.3s;
            /* border-bottom: 1px solid red; */
        }
        &:active {
            color: #fff;
        }
        @media(max-width: 859px) {
            font-size: 12px;
        }
    }
    @media(max-width: 699px) {
        display: none;
    }
`;

export const MenuIcons = styled.div`
    color: #fff;
`;

export const Desktopview = styled.div`
    display: block;
    position: relative;
    @media(max-width: 699px) {
        display: none;
    }
`;

export const Mobileview = styled.div`
    display: none;
    @media(max-width: 699px) {
        display: block;
        position: relative;
    }
`;

export const DropDown = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
    background-color: #272729;
    position: absolute;
    top: 54px;
    right: -20px;
    width: 200px;
    border-radius: 4px;
    padding: 12px;
    color: #000;
    box-shadow: 1px 10px 10px 0 rgba(0, 81, 93, 0.1);

    &::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-right: 16px solid transparent;
        border-bottom: 14px solid #272729;
        border-left: 16px solid transparent;
        position: absolute;
        top: -12px;
        right: 14px;
    }
`;

export const MobileModal = styled.div`
    display: ${props => props.opened ? 'block' : 'none'};
    width: 100%;
    height: 100%;
    z-index: 9999;
    position: fixed;
    background-color: #272729;
    background-size: cover;
    top: 0;
    left: 0;
    overflow: auto;
    @media(min-width: 699px) {
        display: none;
    }
`;

export const MobileLinks = styled.div`
    display: flex;
    justify-content: flex-start;

    /* text-align: start; */

    & > a{
        text-transform: uppercase;
        text-decoration: none;
        color: #bdbdbf;
        transition: all .3s;
        font-size: 18px;
        padding-left: 12px;
        margin-top: 12px;

        &:hover{
            color: #fff;
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    color: #bdbdbf;
    transition: all .3s;
    margin-bottom: 12px;

    &:hover{

        color: #fff;
    }
`;

export const MobileLogo = styled.div`
    display: flex;
    justify-content: center;
`;

export const CloseButtonBlock = styled.div`
    position: fixed;
    bottom: 44px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const CloseButton = styled.button`
    padding: 12px 0 12px 0;
    width: 60%;
    border-radius: 8px;
    border: none;
    background-color: #bdbdbf;
    transition: all .3s;
    cursor: pointer;

    &:hover{
        background-color: #fff;
    }
`;

export const DesktopLinks = styled.div`
`;