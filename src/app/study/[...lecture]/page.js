"use client"
import {use} from "react"
export default function Lecture({params}){
    let paramsValue=use(params)
    return(
        <>
        <h1>Day: {paramsValue.lecture[0]}</h1>
        <h1>Lecture No.{paramsValue.lecture[1]}</h1>
        </>
    )
}