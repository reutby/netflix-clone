import React from "react";
import {useContent} from "../hooks"
import {selectionFilter} from "../utils";
export default function Browse(){

    const {series} = useContent("series");
    const {films} = useContent("films");
    
    const slides = selectionFilter({series , films });
    console.log(films,series,slides);
    return <p>Im in the browse page!</p>
}