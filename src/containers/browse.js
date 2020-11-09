import React, { useState, useEffect, useContext } from 'react';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from './footer';
import { SelectProfileContainer } from './profile';


export function BrowseContainer({ slides }) {

      const {firebase} = useContext(FirebaseContext);
      const [profile, setProfile] = useState({});
      const [loading, setLoading] = useState(false);
      const user = firebase.auth().currentUser || {};

      useEffect(() => {
            setTimeout(() => {
                  setLoading(false);
            }, 3000);

      }, [profile.displayName])


      return profile.displayName ? (
            loading ? (<Loading src={user.photoUrl}></Loading>)
            : null)
            : <SelectProfileContainer user={user} setProfile={setProfile}/>;
}