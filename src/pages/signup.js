import React, { useState, useContext } from 'react';
import { Form } from '../components';
import {useHistory} from 'react-router-dom';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function SignUp() {

  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password)
    .then((result) =>
      result.user
        .updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
        .then(() => {
          history.push(ROUTES.BROWSE);
        })
    )
    .catch((error) => {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    });
  };

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signin">Already a member, sign here now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}