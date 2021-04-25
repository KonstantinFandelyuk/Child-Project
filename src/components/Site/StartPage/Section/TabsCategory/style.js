import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 85px 170px;
  background: #f9f5f2;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 4.5rem;
  line-height: 52px;
  color: #1d253c;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto 35px auto;
`;

export const TabsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const TabsItem = styled.li`
  text-align: center;
  width: 180px;
  height: 140px;
  padding: 30px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
  transition: 0.4s linear;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    transition: 0.4s linear;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.4);
  }
`;

export const TabsIcon = styled.div`
  max-width: 50px;
  margin: 0 auto 10px auto;
`;
export const TabsText = styled.div``;
