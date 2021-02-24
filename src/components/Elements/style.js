import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const InputElement = styled.div`
  position: relative;
  width: ${({ sizeInput }) => (sizeInput !== 'undefined' ? `${sizeInput}px` : '400px')};
`;

export const InputElementPhone = styled(InputElement)`
  position: relative;
  input {
    font-size: 1.6rem;
    font-weight: 300;
    padding: 18px 19px 7px 10px;
    width: 100%;
    outline: none;
    min-height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.07);
    &:not(:placeholder-shown) + label {
      font-size: 1.1rem;
      color: rgba(55, 55, 55, 1);
      top: 4px;
      left: 8px;
      transition: 0.2s linear;
    }
  }
`;

export const InputStyle = styled.input`
  font-size: 1.6rem;
  font-weight: 300;
  padding: 15px 19px 15px 10px;
  width: 100%;
  outline: none;
  min-height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.07);
  &:not(:placeholder-shown) + label {
    font-size: 1.1rem;
    color: rgba(55, 55, 55, 1);
    top: 4px;
    left: 8px;
    transition: 0.2s linear;
  }
`;

export const TextAreaStyle = styled.textarea`
  resize: none;
  width: 100%;
  height: 110px;
`;

export const Label = styled.label`
  position: absolute;
  left: 16px;
  top: 16px;
  color: rgba(55, 55, 55, 0.5);
  font-size: 1.6rem;
  font-weight: 300;
  transition: 0.2s linear;
`;

export const Error = styled.div`
  color: rgba(226, 106, 106, 1);
  padding: 5px;
  height: 25px;
`;

export const SelectStyle = styled.select`
  height: 40px;
  padding: 0 10px;
  font-size: 1.8rem;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;

export const ButtonElement = styled.button`
  font-size: 1.8rem;
  padding: 14px 40px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.4);
  transition: 0.3s ease-in-out;
  text-transform: uppercase;
  border-radius: 3px;
  width: ${({ buttonWidth }) => (buttonWidth !== 'undefined' ? `${buttonWidth}%` : '')};
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#272727')};
  &:hover {
    transition: 0.3s ease-in-out;
    border: 1px solid #ff6336;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#272727' : '#fff')};
    background: #ff6336;
  }
`;

export const ButtonNavLink = styled(NavLink)`
  display: block;
  font-size: 1.8rem;
  padding: ${({ viwe }) => (viwe === 'small' ? '0' : '20px 0 20px 40px')};
  border-radius: ${({ viwe }) => (viwe === 'small' ? '0' : '3px')};
  border: ${({ viwe }) => (viwe === 'small' ? 'none' : '1px solid black')};
  background: ${({ viwe }) => (viwe === 'small' ? 'transparent' : '#ff6336')};
  text-transform: uppercase;
  max-width: 250px;
  margin: ${({ position }) => (position === 'center' ? '0 auto' : '0')};
  transition: 0.3s ease-in-out;
  text-align: left;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#272727' : '#fff')};
  &::after {
    content: url('/images/elements/arrow.svg');
    margin-left: 10px;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    transition: 0.3s ease-in-out;
    border: ${({ viwe }) => (viwe === 'small' ? 'none' : '1px solid white')};

    &:after {
      transition: 0.3s ease-in-out;
      margin-left: 15px;
    }
  }
`;

export const ButtonProfileStyle = styled(NavLink)`
  background: transparent;
  background-image: url('/images/site/header/user-cabinet.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 50px;
  height: 50px;
  display: block;
  margin-left: 10px;
`;
