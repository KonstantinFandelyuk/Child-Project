import styled from 'styled-components';

export const Profile = styled.div`
  padding: 40px 0;
`;

export const ProfileWrapp = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 4.5rem;
  line-height: 52px;
  color: #1d253c;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto 50px auto;
`;

export const UserInfo = styled.div`
  text-align: center;
`;

export const UserPhoto = styled.div`
  max-width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 10px auto;
  position: relative;
  transition: 0.3s ease-out;
  label {
    width: 100%;
    height: 83px;
    top: 126px;
    left: 0;
    opacity: 0;
    padding: 18px 0;
    position: absolute;
    cursor: pointer;
    user-select: none;
    text-align: center;
    color: black;
    background-color: rgb(255 255 255 / 60%);
    transition: 0.3s ease-out;
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: 1px;
    clip: rect(0 0 0 0);
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  &:hover label {
    opacity: 1;
    transition: 0.3s ease-out;
  }
`;

export const BtnCancel = styled.button`
  background: transparent;
  margin-bottom: 30px;
`;

export const UserName = styled.div`
  font-size: 1.6rem;
  color: #1d253c;
  margin-bottom: 10px;
`;
export const UserEmail = styled(UserName)``;
export const UserPhone = styled(UserName)``;
