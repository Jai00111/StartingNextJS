"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import "./layout.css"
export default function Layout({children}){
    let pathname=usePathname();
    console.log(pathname)
    return (
        <div  >
        <h1 className="content">Common layout for about</h1>
        <div className="login-menu" >
           
           {pathname!=="/login/loginteacher"? <li>
            <Link href="/login/loginteacher">login to teacher </Link>
            </li>:""}
            {pathname!=="/login/studentlogin"?<li>
            <Link href="/login/studentlogin">login to student </Link>
            </li>:""}
            {pathname!=="/"?<li>
            <Link href="/"> Home </Link>
            </li>:""}

       </div>
        {children}
        </div>
    )
}