import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';

import react from "react";
import Navigation from "./components/layout/navigator";
const Layout= dynamic(()=> 
import("./components/layout/layout"));
const _Title = dynamic(()=>
import("./components/layout/title"));

export default function about(){

    return(

        <>

         <_Title title= "About Us" />

        <Layout>
         <h1 className="bg-purple-500 text-white p-4" align="center">
         About Us
        </h1>
        <div class="flex justify-center items-center">
              <Image src="/1pic.png" alt="Pic"  
     width={500}
     height={500}
     />
</div>
        <h1 className="bg-purple-500 text-white p-4" align="center">
            <li>•Reduced time consumption</li>
            <li>•No paper work needed</li>
            <li>•No loss of records</li>
            <li>•Centralized database management</li> 
              </h1>
             
        
              <Link href="/">Back</Link>


     </Layout>
        </>
    )
}