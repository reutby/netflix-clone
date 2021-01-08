/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Picture, Spinner,LockBody,ReleaseBody } from "./styles/loading";

export default function Loading({src, ...restProps}){
    return(
        <Spinner {...restProps}>
            <LockBody/>
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody />;
}