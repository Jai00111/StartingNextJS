"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"
export default function About(){
    let router=useRouter();
    function handleClick(pages){
        router.push(pages)
    }
    return(
        <>
        <h1>This is the About page</h1>
        <br/>
        <Link href="/about/aboutstudent"> go to the about student</Link><br/>

        <button onClick={()=>handleClick("/")}>go to home page</button><br/><br/>
        <button onClick={()=>handleClick("/about/aboutstudent")} style={{marginRight:"50px"}}>go to About Student page</button>
        <button onClick={()=>handleClick("/about/aboutcollege")}>go to About College page</button>

        </>
    )
}