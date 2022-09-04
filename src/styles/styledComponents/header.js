import styled from 'styled-components';

export const MainBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoBlock = styled.h1`
    text-transform: uppercase;
    @media(max-width: 699px) {
        font-size: 30px;
    }
    @media(max-width: 599px) {
        font-size: 26px;
    }
    @media(max-width: 499px) {
        font-size: 24px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    letter-spacing: 2px;
    color: #fff;
    &: active {
        color: white;
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
        height: 25px;
    }

    &> ul> li > a {
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 8px 4px;
        &:hover {
            border-bottom: 1px solid #fff;
        }
        &: active {
            color: #fff;
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
    background-color: #fff;
    position: absolute;
    top: 58px;
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
        border-right: 10px solid transparent;
        border-bottom: 8px solid #ffffff;
        border-left: 10px solid transparent;
        position: absolute;
        top: -8px;
        right: 22px;
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