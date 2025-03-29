"use client"
import { useRouter } from "next/navigation"
export default function AboutCollege(){
    let router=useRouter()
    function handleClick(){
        router.push("/")
    }
    return(
        <>
        <h2> this is the page for about college</h2>
        <button onClick={handleClick}>go to home</button>
        </>
    )
}