import React from 'react';
import * as ROUTES from '../constants/routes';
import {Header, Profiles} from '../components';
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
            <Profiles.User src={user.photoURL} onClick={() => setProfile({
              displayName : user.displayName,
              photoUrl : user.photoURL
            })}>
              <Profiles.Picture src={user.photoUrl}></Profiles.Picture>
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      </>
}
