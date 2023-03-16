import React from 'react';
import VkIcon from '../../../assets/icons/vk-icon.png';
import './styles.scss'
import { Container } from '@mui/system';
import { LinksBlock, InstagramIconStyled, TelegramIconStyled, Link } from './styled';

const SocialLinks = () => {
    return(
        <Container>
            <LinksBlock>
               <Link>
                    <TelegramIconStyled style={{width: '32px', height: '32px', transition: 'all .3s'}} />
               </Link>
                <Link>
                    <InstagramIconStyled style={{width: '32px', height: '32px', transition: 'all .3s'}}/>
                </Link>
                <Link>
                    <img src={VkIcon} className='social-links' alt="/png" />
                </Link>
            </LinksBlock>
        </Container>
    )
};

export default SocialLinks;