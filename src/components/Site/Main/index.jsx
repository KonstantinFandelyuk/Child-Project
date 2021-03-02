import React from 'react';
import { ButtonBigLink } from '../../Elements/Button';
import { MainBlock, Wrapp, Title, HeroTitle, Descriptiom } from './style';

export const Main = () => {
  return (
    <MainBlock>
      <div className="container">
        <Wrapp>
          <Title className="title">MEET BELLO</Title>
          <HeroTitle className="herotitle">A new kind of life insurance</HeroTitle>
          <Descriptiom className="descriptiom">
            Secure your family's financial future, in as little as 10 minutes.
          </Descriptiom>
          <ButtonBigLink link="/catalog" text="Попробовать" buttonType="big" position="" />
        </Wrapp>
      </div>
    </MainBlock>
  );
};
