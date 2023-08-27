
import Link from "next/link";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import dynamic from 'next/dynamic';

const Layout= dynamic(()=> 
import("./components/layout/layout"));
const _Title = dynamic(()=>
import("./components/layout/title"));
export default function victimProfile() {
  
  
    return (
      <>
      <Header />
  
      <Layout />
      {/* <MyDashboard title="Admin Dashboard"/><br/> */}
      <h3 align="center">Welcome victim</h3>
      <br/><br/><br/>
     
      
        </>
      
    )
  }