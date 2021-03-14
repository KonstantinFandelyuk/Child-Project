import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../../images/site/header/logo.svg';
import AuthStore from '../../../store/AuthStore';
import { Button, ButtonProfile } from '../../Elements/Button';
import { HeaderBlock, HeaderMemu, MenuItem, MenuItemList, Navigation, Logo } from './style';
import UserCabinetStore from '../../../store/UserCabinetStore';

export const Header = observer(() => {
  const { openModalLogIn, openModalReg, sessionToken } = AuthStore;
  const { openModalPlace } = UserCabinetStore;

  return (
    <HeaderBlock>
      <div className="container">
        <HeaderMemu>
          <MenuItem item="right">
            <Logo>
              <NavLink to="/">
                <img src={LogoImage} alt="" />
              </NavLink>
            </Logo>
          </MenuItem>
          <MenuItem item="left">
            <Navigation>
              <NavLink to="/catalog/" activeClassName="active">
                Каталог
              </NavLink>
              <NavLink to="/feedback/">Отзывы</NavLink>
              <NavLink to="/news/">Стаьи</NavLink>
              <NavLink to="/feedback/">Отзывы</NavLink>
            </Navigation>
          </MenuItem>
          {!sessionToken && (
            <MenuItemList>
              <Button type="button" text="Войти" setFunction={openModalLogIn} />
              <Button type="button" text="Registration" setFunction={openModalReg} />
            </MenuItemList>
          )}
          {sessionToken && (
            <MenuItemList>
              <Button type="button" text="Добавить заведение" setFunction={openModalPlace} />
              <Navigation>
                <NavLink to="/user/places/">Мои заведения</NavLink>
                <NavLink to="/user/feedback/">Мои отзывы</NavLink>
                <NavLink to="/user/favorites/">Избранное</NavLink>
                <NavLink to="/user/newsletters/">Рассылки</NavLink>
              </Navigation>
              <ButtonProfile link="/user/profile/" />
            </MenuItemList>
          )}
        </HeaderMemu>
      </div>
    </HeaderBlock>
  );
});
