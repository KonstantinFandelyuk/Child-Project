import styled from 'styled-components';

export const Item = styled.div`
  width: 240px;
  height: 410px;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  transition: 0.4s linear;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    transition: 0.4s linear;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.4);
  }
`;

export const Name = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: #1d253c;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Rating = styled.div`
  margin-bottom: 10px;
`;

export const Descriptions = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
  min-height: 25px;
  cursor: pointer;
`;

export const CompanyImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const PhoneBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: lightgray;
`;

export const Phone = styled.div`
  font-size: 1.6rem;
  margin-bottom: 10px;
`;

export const ShowPhone = styled.button`
  background-color: #177313;
  border-color: #177313;
  border-radius: 30px;
  color: #fff;
  width: 160px;
  padding: 9px 0 10px;
  margin-bottom: 5px;
`;
