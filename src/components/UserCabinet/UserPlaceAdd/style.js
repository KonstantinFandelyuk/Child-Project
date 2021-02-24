import styled from 'styled-components';

export const AddPlace = styled.div`
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border: 1px solid #ff6336;
  border-radius: 3px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 3rem;
  color: #1d253c;
  margin-bottom: 35px;
`;

export const AdditionalInfo = styled(Title)`
  font-size: 2rem;
  margin-bottom: 25px;
`;

export const Row = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-around;
`;

export const RowTop = styled(Row)`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const SelectTitle = styled.div`
  margin-bottom: 10px;
`;

export const UserPhoto = styled.div`
  max-width: 200px;
  height: 200px;
  /* border-radius: 50%; */
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
