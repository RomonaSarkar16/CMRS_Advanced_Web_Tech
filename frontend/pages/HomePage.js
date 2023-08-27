// import dynamic from 'next/dynamic'
// import Image from 'next/image'
// const Layout= dynamic(()=> 
// import("./components/layout/layout"));
//   // const Title = dynamic(() => import('../Layout/title'), {
//   //   ssr: false,
//   // })
//   export default function LandingPage() {
//     return(
//         <>
//        <div class="relative">
//   <nav class="absolute top-0 left-0 right-0 bg-gray-800 p-4">
//     <button
//       id="dropdownDefaultButton"
//       data-dropdown-toggle="dropdown"
//       class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       type="button"
//     >
//      Login
//     </button>
//     <div
//       id="dropdown"
//       class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//     >
//       <ul
//         class="py-2 text-sm text-gray-700 dark:text-gray-200"
//         aria-labelledby="dropdownDefaultButton"
//       >
//         <li>
//           <a
//             href="/Admin/Signin"
//             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//           >
//             Admin
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//           >
//             Manager
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//           >
//             Police
//           </a>
//           </li>
//         <li>
//           <a
//             href="#"
//             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//           >
//             Victim
//           </a>
//           </li>
        
//         <li>
//           <a
//             href="#"
//             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//           >
//             Sign out
//           </a>
//         </li>
//       </ul>
//     </div>
//   </nav>
//   <Image src="/home page.png" alt="Crime" width={1599} height={750} />
// </div>


//         </>
//     )
//   }
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
// const Layout = dynamic(() => import('../Layout/layout'), {
//   ssr: false,
// });
// const Title = dynamic(() => import('../Layout/title'), {
//   ssr: false,
// });
const Layout= dynamic(()=> 
import("./components/layout/layout") ,
{
  ssr:false,
});
const _Title = dynamic(()=>
import("./components/layout/title"));

export default function AdminPage() {
  

return (
  <>
   <_Title title= "Dashboard" />
    <Layout/>

   
   

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div class="flex items-center md:order-2">
  <button type="button" class="flex mr-3 text-sm bg-white-800 text-white rounded-full md:mr-0 focus:ring-4 focus:ring-white-300 dark:focus:ring-white-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
 
 Login
</button>
      
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
       
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="/Admin/Signin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Admin</a>
          </li>
          <li>
            <a href="/Admin/Victiminputform" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Manager</a>
          </li>
          <li>
            <a href="/Admin/Policeinputform" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Police </a>
          </li>
          <li>
            <a href="/signin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Victim </a>
          </li>
        
         
        </ul>
      </div>&nbsp;&nbsp;&nbsp;
      <button type="button" class="flex mr-3 text-sm bg-white-800 text-white rounded-full md:mr-0 focus:ring-4 focus:ring-white-300 dark:focus:ring-white-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
 
 Registration
</button>
      
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
       
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="/Admin/Registration" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Admin</a>
          </li>
          <li>
            <a href="/Admin/Victiminputform" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Manager</a>
          </li>
          <li>
            <a href="/Admin/Policeinputform" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Police </a>
          </li>
          <li>
            <a href="/victim/Reg" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Victim </a>
          </li>
        
         
        </ul>
      </div>
      </div>
      </div>
      
  <Image src="/home page.png" alt="Crime" width={1599} height={750} />
  
</nav>
  

 
</>
)}