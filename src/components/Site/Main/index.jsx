import React from 'react';
import { ButtonLink } from '../../Elements/index';
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
          <ButtonLink link="/catalog" text="Get my price" buttonType="big" position="" />
        </Wrapp>
      </div>
    </MainBlock>
  );
};
