import styled from 'styled-components';

export const FormBlock = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

export const InputField = styled.input`
    width: 100%;
    height: 42px;
    margin-bottom: 12px;
    box-shadow: 1px 10px 10px 0 rgba(0, 59, 110, 0.1);
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 4px;

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
    width: 320px;
`;

export const InputButton = styled.button`
      height: 44px;
      width: 100%;
`;