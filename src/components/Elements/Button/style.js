import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const BigButtonLink = styled(NavLink)`
  display: block;
  font-size: 1.8rem;
  padding: ${({ viwe }) => (viwe === 'small' ? '0' : '20px 0 20px 30px')};
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
    border: 1px solid white;

    &:after {
      transition: 0.3s ease-in-out;
      margin-left: 15px;
    }
  }
`;

export const ButtonNavLink = styled(NavLink)`
  display: block;
  font-size: 1.8rem;
  font-style: italic;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#272727' : '#007189')};
  &::after {
    content: '';
    width: 32px;
    height: 12px;
    display: inline-block;
    mask: url('/images/elements/arrow.svg') no-repeat;
    mask-size: inherit;
    background-color: ${({ colorpic }) => colorpic};
    margin-left: 10px;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    transition: 0.3s ease-in-out;

    &:after {
      transition: 0.3s ease-in-out;
      margin-left: 15px;
    }
  }
`;

export const ButtonProfileStyle = styled(NavLink)`
  background: transparent;
  background-image: url('/images/site/header/user-cabinet.png');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 50px;
  height: 50px;
  display: block;
  margin-left: 10px;
`;
