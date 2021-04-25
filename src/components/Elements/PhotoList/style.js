import styled from 'styled-components';

export const UserPhoto = styled.div`
  max-width: 200px;
  height: 200px;
  /* border-radius: 50%; */
  overflow: hidden;
  overflow-y: ${({ elemScroll }) => (elemScroll ? 'hidden' : 'scroll')};
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
