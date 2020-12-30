import React from "react";
import { Accordion } from "../components"
import faqsData from "../fixtures/faqs.json"; 
export function FaqsContainer(){

    return(
        <Accordion>
        <Accordion.Title> Frequently Asks Questions</Accordion.Title>
            {faqsData.map((question)=>
                <Accordion.Item key={question.id}>
                    <Accordion.Header>{question.header}</Accordion.Header>
                    <Accordion.Body>{question.body}</Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    );
}
