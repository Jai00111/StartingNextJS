"use client"
import { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link"

export default function Home() {
  


 function Innercomponent(){
    return(
      <h1>Inner component is here</h1>
    )
  }
  let router=useRouter();
  return (
    <main>
      <h1 style={{textAlign:"center"}}>Next.js with Jai</h1>
      <div style={{textAlign:"center", color:"blue"}}>
      <Link href={"/login"}>Go to login page</Link>
      <br></br>
      <Link href={"/about"}>Go to about page</Link>
      </div>
      

    </main>
  );
}
