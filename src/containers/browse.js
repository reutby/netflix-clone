/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { Header, Loading } from "../components";
import SelectProfileContainer from "../containers/profiles";
import { FirebaseContext } from "../context/firebase";

// eslint-disable-next-line react/prop-types
export default function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log("profile", profile);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
      <Header src={"joker1"}>
        <p>hello</p>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
