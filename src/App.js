import React from 'react'

import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Browse, Signin, Signup, Home } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}