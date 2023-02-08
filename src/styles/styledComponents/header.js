import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const MainBlock = styled.div`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuAndSelect = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const LogoBlock = styled.div`
    letter-spacing: .8px;
    color: #bdbdbf;
    font-size: 18px;
    transition: all .3s;
    &:hover {
        color: #fff
    }
    @media(max-width: 599px) {
        font-size: 16px;
    }
    @media(max-width: 499px) {
        font-size: 14px;
    }
`;

export const LogoSpan = styled.span`
    font-size: 8px;
    margin-left: 4px;
    @media(max-width: 559px) {
        font-size: 7px;
    }
    @media(max-width: 499px) {
        font-size: 6px;
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
        &:hover {
            color: #fff;
            transition: all 0.3s;
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
    box-shadow: 1px 10px 10px 0 rgba(0, 59, 110, 0.1);

    &::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-right: 16px solid transparent;
        border-bottom: 12px solid #272729;
        border-left: 16px solid transparent;
        position: absolute;
        top: -12px;
        right: 14px;
    }
`;

export const MobileModal = styled.div`
    display: ${props => props.opened ? 'block' : 'none'};
    z-index: 9999;
    position: absolute;
    background-color: #fff;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    @media(min-width: 699px) {
        display: none;
    }
`;

export const MobileLinks = styled.div`

`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    color: #000;
    font-weight: 600;
    transition: .3s;
    margin-bottom: 12px;


    &:hover{
        /* background-color: #000; */
        color: #BFB3B3;
    }
`;

export const DesktopLinks = styled.div`
`;