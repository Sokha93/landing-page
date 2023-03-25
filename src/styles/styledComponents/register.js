import styled from 'styled-components';

export const FormBlock = styled.div`
    display: flex;
    justify-content: center;
    /* margin-top: 50px; */
`;

export const MainBlock = styled.section`
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-color: red;
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
  margin-top: 22px;
  height: 60px;
  padding: 4px;
  border-radius: 30px;
  border: 1px solid transparent;
  background-color: #272729;
  color: #bdbdbf;
  box-shadow: 1px 10px 10px 0 rgba(0, 59, 110, 0.1);
  transition: all .3s;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: large;
  cursor: pointer;

  &:hover {
    /* background-color: #fff; */
    color: #fff;
  }
  &:active {
    background-color: green;
  }
`;