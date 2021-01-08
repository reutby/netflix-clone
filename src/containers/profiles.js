/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../logo.svg";
import { Header } from "../components";

import { Profiles } from "../components";
import * as ROUTES from "../constants/routes";

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title> Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={()=>setProfile({
              displayName: user.displayName,
              photoURL: user.photoURL,
            })}
          >
            <Profiles.Picture src={user ? user.photoURL : null} />
            <Profiles.Name>{user ? user.displayName : null}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
