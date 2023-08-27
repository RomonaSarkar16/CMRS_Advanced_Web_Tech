import { useAuth } from "./utils/authcontext";
import axios from 'axios';
import {useRouter} from 'next/router';
import { useEffect,useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from "./components/layout/footer";
const Layout= dynamic(()=> import("./components/layout/layout"));
const _Title = dynamic(()=>
import("./components/layout/title"));
export default function signout(){
  


const router  = useRouter();
const { logout } = useAuth();

useEffect(() => {

    logout();

handleSubmit();
  }, []);
 const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
        const response = await axios.get("http://localhost:3000/victim/signout")
        if (response.data.Logout == "Success") {
            router.push({
                pathname: '/signin',
            });
        } else {
            router.push({
                pathname: 'error',
            });
        }
    } catch (error) {
        console.error('Error adding books:', error);
    }
}


// const handleSubmit = async (e) => {
//     e.preventDefault();
// }

 const handleSignOut = () => {
      // Clear session data from cookies and state
      document.cookie = 'VicEmail=; domain=localhost; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
      logout();
      router.push('/signin'); // Redirect to your desired sign-out page
    };


    return (
        <>
         <_Title title= "Sign Out" />
        <Layout>
      
        <button 
         class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         align="center"
        onClick={handleSignOut}>Sign Out</button>
            {/* <h2>You have signed out . Thank you </h2> */}
            </Layout>
        
        <Footer/>
        </>
            );
    }