import React from "react";
import { Accordion, OptForm } from "../components"
import faqsData from "../fixtures/faqs.json";
export function FaqsContainer() {

    return (
        <Accordion>
            <Accordion.Title> Frequently Asks Questions</Accordion.Title>
            {faqsData.map((question) =>
                <Accordion.Item key={question.id}>
                    <Accordion.Header>{question.header}</Accordion.Header>
                    <Accordion.Body>{question.body}</Accordion.Body>
                </Accordion.Item>
            )}
            <OptForm>
                <OptForm.Break />
                <OptForm.Text> Ready to watch? Enter your email to create or restart your membership. </OptForm.Text>
                <OptForm.Input type="email" placeholder="Email address" />
                <OptForm.Button>Get started</OptForm.Button>
                <OptForm.Break />
                <OptForm.Break />
            </OptForm>

        </Accordion>
    );
}
