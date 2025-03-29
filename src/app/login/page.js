"use client"
import { useRouter } from "next/navigation"
export default function Login(){
    let router=useRouter();
    return(
        <>
        <h1>This is the Login page</h1>
        <button onClick={()=>router.push("/")}>go to home page</button>
        </>
    )
}