
import Footer from './components/layout/footer';

import { useState, useEffect } from 'react';
import { useAuth } from "./utils/authcontext";
// import Layout from './components/layout/layout';
import { useRouter } from 'next/router';
// import Footer from './components/layout/footer';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Link from 'next/link';
import Reg from './victim/Reg';
import Navigation from './components/layout/navigator';
// const Layout= dynamic(()=> 
// import("./components/layout/layout"));
const _Title = dynamic(()=>
import("./components/layout/title"));
export default function signin() {
  
    const [VicEmail, setVicEmail] = useState('')
    const [Vicpassword, setVicpassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter();
    const { login } = useAuth();

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    // useEffect(() => {
    //   // Check if the user is already logged in, and if so, redirect to their profile page
    //   if (/* Your logic to check user session */) {
    //     router.push('/victimprofile');
    //   }
    // }, []);
    // const handleSubmit = async (event) => {
    //   event.preventDefault()
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!VicEmail) {
        setEmailError('Email is required');
      } else {
        setEmailError('');
      }
    
      if (!Vicpassword) {
        setPasswordError('Password is required');
      } else {
        setPasswordError('');
      }
    
      // If there are validation errors, stop the submission
      if (emailError || passwordError) {
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/victim/signin', { VicEmail, Vicpassword })
        console.log("res: "+response.data)

          sessionStorage.setItem('VicEmail', response.data);
          //console.warn( "cokkie : "  + document.cookie)
          // Set cookie with domain and path
      // document.cookie = `VicEmail=${response.data}; domain=localhost; path=/`;
      document.cookie = `${response.data}; domain=localhost; path=/`;

      console.warn("Cookie: " + document.cookie);
      
          login(VicEmail, document.cookie);
          console.warn("email: "+ VicEmail)
          console.warn("Cookie: "+ document.cookie);
          //console.warn("Cookie in session: "+ user.cookie);

          router.push('/');



      } catch (error) {
          console.log("error22: "+error.message)
        setError("invalid login")
      }
    }

    // const handleSignOut = () => {
    //   // Clear session data from cookies and state
    //   document.cookie = 'VicEmail=; domain=localhost; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    //   logout();
    //   router.push('/signin'); // Redirect to your desired sign-out page
    // };

    return (
      <>
      <_Title title= "Sign IN" />
  
      
      {/* <Layout> */}
      <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
    <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div class="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
      <section class="bg-gray-50 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
               Crime Managemant and Reporting System  
            </a>
      <form onSubmit={handleSubmit}  >
      <h1 class="text-2xl font-bold text-black-500 mb-4">Sign In</h1>
              <br></br>
              <div class="relative z-0 w-full mb-6 group">
              <input type="email" 
              id="VicEmail"
              
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
               value={VicEmail} 
               onChange={(e) => setVicEmail(e.target.value)}/>
               {emailError && <div className="text-red-500 text-sm mt-1">{emailError}</div>}

              <label htmlfor="email"  
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Victim Email :</label>
              
              </div>
          
      <br></br>
              <div class="relative z-0 w-full mb-6 group">

              <input type="password" 
              id="Vicpassword"  
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
              value={Vicpassword} 
              onChange={(e) => setVicpassword(e.target.value)}/>
  {passwordError && <div className="text-red-500 text-sm mt-1">{passwordError}</div>}
              <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password:</label>
              {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> */}
 </div>
              
              {/* </div>
              <div class="ml-3 text-sm">
                                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
              <div> */}
              {/* <button type="submit">Sign In</button> */}
              <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <a href="/victim/ChangePassword" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
              <div>
              <button type="submit" 
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Sign In</button>
                  {error && (
                    <div>
                      <p class="mt-2 text-sm text-red-600 dark:text-red-500"> 
                      <span class="font-medium">{error}</span></p>
                    </div>
                  )}
              <br></br>
             
              </div>
            <br></br>
              <div>
              <Link href="./victim/Reg" 
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Sign Up</Link>
                  {/* {error && (
                    <div>
                      <p class="mt-2 text-sm text-red-600 dark:text-red-500"> 
                      <span class="font-medium">{error}</span></p>
                    </div>
                  )} */}
              <br></br>
             
              </div>
            
              </form>
              </div>
              </div>
              <Footer/>
              </section>
              </div>
              </div>

              {/* </Layout> */}
      <br/>
      {/* <Footer></Footer> */}
   
      </>
          )
};

 