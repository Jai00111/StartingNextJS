import { NextResponse } from "next/server"
export default function Middleware(req){
    // if(req.nextUrl.pathname !=="/login"){
    //     return NextResponse.redirect(new URL("/login",req.url));         ye krne m aara h error kiyu ye koi bhi or page load krne nhi dega koi bhi page ko redirect krne ki kosis krenge to ye login page pe hi redirect krega esliye

    // }
    return NextResponse.redirect(new URL("/login",req.url));
}
export const config={
    matcher:["/about/:path","/studentlist/:path"]
}