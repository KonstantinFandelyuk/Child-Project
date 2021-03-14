import React from 'react';
import {
  Wrap,
  Title,
  HeroTitle,
  Description,
  AdvantageTabs,
  TabsItem,
  ItemImage,
  ItemText,
  ItemSubText,
  UmbrellaImage,
  DogImage,
} from './style';

export const Advantage = () => {
  return (
    <section>
      <Wrap>
        <UmbrellaImage src="./images/site/sections/global-img/Rectangle.svg" alt="" />
        <div className="container">
          <Title>Top-Rated Term Life Insurance</Title>
          <HeroTitle>You’re in safe hands</HeroTitle>
          <Description>
            We've partnered with, [insert underwriter], one of the world’s largest, most trusted
            insurance companies. This means we can ensure reliability in paying Claims.
          </Description>
          <AdvantageTabs>
            <TabsItem>
              <ItemImage>
                <img src="./images/site/sections/advantage/rated.svg" alt="" />
              </ItemImage>
              <ItemText>Top-Rated</ItemText>
              <ItemSubText>A+ Financial Strength Rating by A.M. Best. </ItemSubText>
            </TabsItem>
            <TabsItem>
              <ItemImage wooman={'wooman'}>
                <img src="./images/site/sections/advantage/wooman.svg" alt="" />
              </ItemImage>
              <ItemText>Expert guidance</ItemText>
              <ItemSubText>
                We've placed millions of dollars in coverage people nationwide.
              </ItemSubText>
            </TabsItem>
            <TabsItem>
              <ItemImage>
                <img src="./images/site/sections/advantage/rating.svg" alt="" />
              </ItemImage>
              <ItemText>We care</ItemText>
              <ItemSubText>
                We care about you. We’re a 5 star insurance company. Well… Close enough!
              </ItemSubText>
            </TabsItem>
          </AdvantageTabs>
        </div>
        <DogImage src="./images/site/sections/global-img/dog.svg" alt="" />
      </Wrap>
    </section>
  );
};
