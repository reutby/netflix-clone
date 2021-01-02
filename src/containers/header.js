/* eslint-disable react/prop-types */
import React from "react";
import {Header} from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function HeaderContainer({children, ...restProps}){
    return (
        <Header {...restProps}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="netflix" src={logo} />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}