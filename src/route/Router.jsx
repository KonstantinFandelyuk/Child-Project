import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Site } from '../components/Site';
import { Catalog } from '../components/Site/Catalog';
import { UserProfile } from '../components/UserCabinet/UserProfile';
import { UserFeedback } from '../components/UserCabinet/UserFeedback';
import { UserFavorites } from '../components/UserCabinet/UserFavorites';
import { UserNewsletters } from '../components/UserCabinet/UserNewsletters';
import { UserCompany } from '../components/UserCabinet/UserCompany';
import { CatalogPage } from '../components/Site/Catalog/CatalogPage';

export const Routers = observer(({ token }) => {
  const viweProfileMenu = (token) => {
    if (token && typeof token !== 'undefined') {
      return (
        <Switch>
          <Route exact path="/" component={Site} />
          <Route exact path="/catalog/" component={Catalog} />
          <Route path="/catalog/company/" component={CatalogPage} />
          <Route path="/user/places/" component={UserCompany} />
          <Route path="/user/feedback/" component={UserFeedback} />
          <Route path="/user/favorites/" component={UserFavorites} />
          <Route path="/user/newsletters/" component={UserNewsletters} />
          <Route path="/user/profile/" component={UserProfile} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" component={Site} />
          <Route exact path="/catalog/" component={Catalog} />
          <Route path="/catalog/company/" component={CatalogPage} />
          <Redirect to="/" />
        </Switch>
      );
    }
  };
  return viweProfileMenu(token);
});
