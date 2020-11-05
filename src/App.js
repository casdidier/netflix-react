import React from 'react'

import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Browse, Signin, Signup, Home } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';

export default function App() {

  const user = {};

  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <IsUserRedirect
         user={user}
         loggedInPath={ROUTES.BROWSE}
         path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
      </Route>
      <Route exact path={ROUTES.BROWSE}>
      <IsUserRedirect
         user={user}
         loggedInPath={ROUTES.BROWSE}
         path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </}