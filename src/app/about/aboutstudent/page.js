"use client"
import { useRouter } from "next/navigation"
export default function AboutStudent(){
    let router=useRouter();
    return(
        <div style={{display:"flex",flexDirection:"column", textAlign:"center",display:"inline-block",padding:"40px"}}>
        <h1 style={{alignItems:"center"}}>This is the AboutStudent page</h1>

            <li>Rahul</li>
            <li>Jai</li>
            <li>Mayank</li>
        <button onClick={()=>router.push("/about")}>go to about page</button>
        
        </div>
    )
}