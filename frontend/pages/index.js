import Link from "next/link";
// import Image from "next/image";

import Image from "next/image";
//import Layout from "./components/layout/layout";
import dynamic from "next/dynamic";
import Footer from "./components/layout/footer";

const Layout= dynamic(()=> 
import("./components/layout/layout"));
const _Title = dynamic(()=>
import("./components/layout/title"));
export default function Home() {
  return (
    <>
  <_Title title="Home"/>
     <Layout>
     <h1 className="bg-purple-500 text-white p-4" align="center">
          Welcome to The Reporting Page
        </h1>
     <h1> </h1>
    <h2 className="bg-purple-500 text-white p-4" align="center">Here you can report any valid incident and we will provide you justice.</h2> 

    <Image src="/It's time to celebrate.png" alt="Crime"  align="center"
     width={2000}
     height={700}
     />
    {/* <Image src="/bg.png" alt="Crime1"  align="right"
     width={600}
     height={200}
     /> */}
    
    <Footer/>
     </Layout>
    </>
  )
}
