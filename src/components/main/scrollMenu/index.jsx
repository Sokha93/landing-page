import { Container } from '@mui/material';
import React from 'react';
import { Cards, Image, ThirdHeader, Paragraph, ClickButton, CardsBlock} from './styles';
import image from '../../../assets/images/wallpaperbetter.jpg'

const ScrollMenu = () => {
    return (
        <Container>
            <CardsBlock>
                <Cards>
                    <Image src={ image }/>
                    <div>
                        <h2>Lorem ipsum dolor</h2>
                        <ThirdHeader>Lorem: ipsum dolor</ThirdHeader>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolor cupiditate atque error? Quidem cupiditate consequuntur 
                            odit a sed! Culpa suscipit expedita quas sequi ullam harum
                            provident molestiae veniam, possimus voluptas!
                        </Paragraph>
                        <ClickButton>Lorem ipsum dolor</ClickButton>
                    </div>
                </Cards>
            </CardsBlock>
        </Container>
    )
};

export default ScrollMenu;