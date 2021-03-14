import React from 'react';
import { ButtonElement, BigButtonLink, ButtonNavLink, ButtonProfileStyle } from './style';

export const Button = ({ type, text, setFunction }) => {
  return (
    <ButtonElement type={type} onClick={(e) => setFunction()}>
      {text}
    </ButtonElement>
  );
};

export const ButtonForm = ({ type, text, buttonWidth }) => {
  return (
    <ButtonElement type={type} buttonWidth={buttonWidth}>
      {text}
    </ButtonElement>
  );
};
export const ButtonLink = ({ link, text, colorpic }) => {
  return (
    <ButtonNavLink to={link} colorpic={colorpic}>
      {text}
    </ButtonNavLink>
  );
};

export const ButtonBigLink = ({ link, text, buttonType, position }) => {
  return (
    <BigButtonLink to={link} viwe={buttonType} position={position}>
      {text}
    </BigButtonLink>
  );
};

export const ButtonProfile = ({ link }) => {
  return <ButtonProfileStyle to={link}></ButtonProfileStyle>;
};
