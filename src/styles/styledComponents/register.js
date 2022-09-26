import styled from 'styled-components';

export const FormBlock = styled.div`
    display: flex;
    justify-content: center;
    /* margin-top: 50px; */
`;

export const InputField = styled.input`
    /* width: 100%; */
    height: 42px;
    margin-bottom: 12px;
    box-shadow: 1px 10px 10px 0 rgba(0, 59, 110, 0.1);
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 4px;
    transition: .2s;

    &:hover {
        border: 1px solid green;
    }

    &:focus {
        outline: none;
        border: 1px solid red;
        border-color: red;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: 18px;
        opacity: .4;
      }

      @media(max-width: 349px) {
        // padding: 0;
      }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 320px;
`;

export const InputButton = styled.button`
      height: 52px;
      padding: 4px;
      border-radius: 4px;
      border: 1px solid transparent;
      background-color: #000;
      color: #fff;
      box-shadow: 1px 10px 10px 0 rgba(0, 59, 110, 0.1);
      transition: .2s;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 1px;
      font-size: large;

      &:hover {
        background-color: #fff;
        color: #000;
      }
      &:active {
        background-color: green;
      }
`;