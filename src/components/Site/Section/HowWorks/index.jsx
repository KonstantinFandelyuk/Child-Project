import React from 'react';
import { ButtonBigLink } from '../../../Elements/Button';
import {
  Wrap,
  Title,
  HeroTitle,
  Description,
  WorkStep,
  StepItem,
  ItemName,
  ItemText,
  ItemImage,
} from './style';

export const HowWorks = () => {
  return (
    <section>
      <Wrap>
        <div className="container">
          <Title>How it works</Title>
          <HeroTitle>Affordable life insurance in minutes</HeroTitle>
          <Description>
            We've partnered with, [insert underwriter], one of the world’s largest, most trusted
            insurance companies. This means we can ensure reliability in paying Claims.
          </Description>
          <WorkStep>
            <StepItem data-aos="fade-up" data-aos-duration="2000">
              <ItemImage>
                <img src="/src/images/site/sections/how-works/icon/1.svg" alt="" />
              </ItemImage>
              <ItemName>Get My Price</ItemName>
              <ItemText>
                Choose the amount that you would like to be covered for and we’ll give you a quote.
              </ItemText>
            </StepItem>
            <StepItem data-aos="fade-up" data-aos-duration="2000">
              <ItemImage>
                <img src="/src/images/site/sections/how-works/icon/2.svg" alt="" />
              </ItemImage>
              <ItemName>Apply</ItemName>
              <ItemText>Answer a few questions and get your final price.</ItemText>
            </StepItem>
            <StepItem data-aos="fade-up" data-aos-duration="2000">
              <ItemImage>
                <img src="/src/images/site/sections/how-works/icon/3.svg" alt="" />
              </ItemImage>
              <ItemName>You’re Covered</ItemName>
              <ItemText>Congratulations on securing your loved ones financial future!</ItemText>
            </StepItem>
          </WorkStep>
          <ButtonBigLink link="/" text="Get my price" buttonType="big" position="center" />
        </div>
      </Wrap>
    </section>
  );
};
