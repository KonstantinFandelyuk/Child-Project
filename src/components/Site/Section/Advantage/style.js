import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 85px 170px;
  background: #f8f8f8;
  text-align: center;
  position: relative;
`;

export const Title = styled.div`
  font-weight: 600;
  line-height: 17px;
  text-transform: uppercase;
  color: #f46752;
  margin-bottom: 27px;
`;

export const HeroTitle = styled.div`
  font-weight: 500;
  font-size: 4.5rem;
  line-height: 52px;
  color: #1d253c;
  margin-bottom: 35px;
`;

export const Description = styled.div`
  font-size: 1.9rem;
  line-height: 30px;
  color: #5a6482;
  margin-bottom: 15px;
  max-width: 1024px;
  margin: 0 auto 40px auto;
`;

export const AdvantageTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabsItem = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 320px;
`;

export const ItemImage = styled.div`
  margin-bottom: 15px;
  margin-bottom: ${({ wooman }) => (wooman ? '0' : '')};
`;

export const ItemText = styled.div`
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  color: #1d253c;
`;
export const ItemSubText = styled.div`
  font-size: 1.1rem;
  line-height: 26px;
  text-align: center;
  color: #5a6482;
  max-width: 230px;
  margin: 0 auto;
`;

export const UmbrellaImage = styled.img`
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DogImage = styled.img`
  position: absolute;
  bottom: -27px;
  right: -2px;
  z-index: 1;
`;
