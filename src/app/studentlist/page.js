import Link from "next/link";

export default function Student(){
    let students=["Jai","Alisha","Rahul","Himani","Karan"]
    return(
        <>
        <h1>Student List</h1>
        {students.map((e,idx)=>{
            return <li key={idx}>
            <Link href={`/studentlist/${e}`}>{e}</Link>
        </li>
        })}
          
      
        </>
    )
}