import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 85px 170px;
  background-color: #e5f3fe;
  text-align: center;
  position: relative;
  min-height: 382px;
  &::before {
    content: '';
    position: absolute;
    top: -65px;
    left: 0;
    background-image: url('/images/site/sections/get-start/man.svg');
    background-repeat: no-repeat;
    background-size: inherit;
    width: 571px;
    height: 466px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 24%;
    background-image: url('/images/site/sections/get-start/boy.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 80px;
    height: 57%;
  }
`;

export const HeroTitle = styled.div`
  font-weight: 500;
  font-size: 4.5rem;
  line-height: 52px;
  color: #1d253c;
  margin-bottom: 10px;
`;

export const SubTitle = styled.div`
  font-size: 19px;
  line-height: 30px;
  text-align: center;
  color: #676562;
  margin-bottom: 30px;
`;
