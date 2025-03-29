"use client"
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  let[name,setName]=useState("jai")
  function handleClick(pages){
    router.push(pages)
    setName("alisha");
  }

 function Innercomponent(){
    return(
      <h1>Inner component is here</h1>
    )
  }
  let router=useRouter();
  return (
    <main className={styles.page}>
      <h1>Next.js with {name}</h1>
      <button onClick={()=>handleClick("/login")}>Go to login page</button>
      
      <Innercomponent/>

    </main>
  );
}
