import styled from 'styled-components';

export const CardsBlock = styled.div`
    margin: 100px auto;
    display: flex;
    justify-content: center;

    @media(max-width: 699px){
        margin: 100px auto;
    }
`;

export const Cards = styled.div`
    display: flex;
    align-items: center;
    width: 75vw;
    max-width: 650px;
    padding: 50px 30px 50px 20px;
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 1px 10px 10px 0 rgba(0, 81, 93, 0.1);

    @media(max-width: 699px){
        flex-direction: column;
        text-align: center;
        margin: 0 40px;
        padding-left: 50px;
        padding-right: 50px;
        width: 100%;
    }
`;

export const Image = styled.img`
    box-shadow: none;
    max-width: 280px;
    width: 28vw;
    height: 300px;
    object-fit: cover;
    margin-left: -60px;
    margin-right: 30px;
    border-radius: inherit;
    /* box-shadow: 0 60px 40px rgb(0 0 0 / 8%); */
    box-shadow: 1px 10px 10px 0 rgba(0, 81, 93, 0.1);

    @media(max-width: 699px){
        margin: -100px 0 30px 0;
        width: 100%;
        max-width: 1000px;
    }
`;


export const ThirdHeader = styled.h3`
    color: rgb(0 0 0 / 90%);
`;

export const Paragraph = styled.p`
    color: rgb(0 0 0 / 70%);
`;

export const ClickButton = styled.button`
    border: 0;
    /* background: #5448de; */
    background-color: #272729;
    /* color: #f8f8f8; */
    color: #bdbdbf;
    font-family: inherit;
    padding: 16px 26px;
    font-size: 16px;
    border-radius: 40px;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        background-color: #303033;
        color: #fff;
    }
`;