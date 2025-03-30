
"use client"
import { use } from "react"
export default function Student({params}){
    let paramsValue=use (params)
 return(
    <>
    <h1>This the detail of {paramsValue.student}</h1>
    </>
 )
}