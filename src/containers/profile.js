import React from 'react';
import * as ROUTES from '../constants/routes';
import {Header} from '../components';
import logo from '../logo.svg';


export function SelectProfileContainer({user, setProfile}) {
  return <>
        <Header bg={false}>
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
          </Header.Frame>
        </Header>

        <Profiles>
          <Profiles.Title>Who's watching?</Profiles.Title>
          <Profiles.List>
            <Profiles.User src={user.photoURL}></Profiles.User>
          </Profiles.List>
        </Profiles>
      </>
}
