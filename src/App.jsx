import React, { useEffect, useState } from 'react';
import { Routers } from './route/Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/main';
import { observer } from 'mobx-react-lite';
import { Loading } from './components/Loading';
import SwitchTheme from './store/SwitchTheme';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import { LogIn } from './components/Auth/LogIn';
import { Registartions } from './components/Auth/Registartions';
import AuthStore from './store/AuthStore';
import GlobalStore from './store/GlobalStore';
import { UserPlaceAdd } from './components/UserCabinet/UserPlaceAdd';
import UserCabinetStore from './store/UserCabinetStore';
import { Copyright } from './components/Site/Copyright';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TestingComponets } from './components/testingComponets';

export const App = observer(() => {
  AOS.init();
  const { placeModal } = UserCabinetStore;
  const { modalLogin, modalReg, sessionToken, getCurrentUser } = AuthStore;
  const { loading } = GlobalStore;
  useEffect(() => {
    if (sessionToken) {
      getCurrentUser();
    }
  }, [sessionToken]);

  return (
    <ThemeProvider theme={{ mode: SwitchTheme.themeName }}>
      <GlobalStyle />
      <Header />
      {/* <TestingComponets /> */}
      <Routers token={sessionToken} />
      <Footer />
      <Copyright />
      {loading && <Loading />}
      {modalLogin && <LogIn />}
      {modalReg && <Registartions />}
      {placeModal && <UserPlaceAdd />}
    </ThemeProvider>
  );
});
