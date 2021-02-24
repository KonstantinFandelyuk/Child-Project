import styled from 'styled-components';

export const HeaderBlock = styled.header`
  box-shadow: 0px 1px 0px 0px rgba(137, 137, 137, 0.4);
`;

export const HeaderMemu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 0;
`;

export const MenuItem = styled.li`
  margin-right: ${({ item }) => (item === 'left' ? 'auto' : '')};
  margin-right: ${({ item }) => (item === 'right' ? '35px' : '')};
`;

export const MenuItemList = styled(MenuItem)`
  display: flex;
  align-items: center;
  button {
    margin-left: 15px;
    &:first-child {
      border: none;
    }
  }
`;

export const Logo = styled.div``;

export const Navigation = styled.nav`
  a {
    font-size: 1.6rem;
    line-height: 19px;
    color: #1d253c;
    margin-left: 22px;
  }
  .active {
    color: #007188;
  }
`;
