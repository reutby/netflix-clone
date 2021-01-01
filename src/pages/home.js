import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import FaqsContainer from "../containers/faqs";
import HeaderContainer from "../containers/header";
import {OptForm, Feature} from "../components"
export default function Home() {
    return (
        <>
            <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                <OptForm>
                    <OptForm.Break />
                    <OptForm.Text> Ready to watch? Enter your email to create or restart your membership. </OptForm.Text>
                    <OptForm.Input type="email" placeholder="Email address" />
                    <OptForm.Button>Get started</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Break />
                </OptForm>
            </Feature>

            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}