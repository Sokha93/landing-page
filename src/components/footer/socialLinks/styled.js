import styled from 'styled-components';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

export const LinksBlock = styled.div`
    margin-top: 22px;
    display: flex;
    justify-content: center;
`;

export const TelegramIconStyled = styled(TelegramIcon)`
    border-radius: 50%;
    background-color: #bdbdbf;
    padding: 4px;
    margin-right: 12px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        background-color: #fff;
    }
`;

export const InstagramIconStyled = styled(InstagramIcon)`
    border-radius: 50%;
    background-color: #bdbdbf;
    padding: 4px;
    margin-right: 12px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        background-color: #fff;
    }
`;

export const Link = styled.a`
    color: #000;
`;