// import { createContext, useContext, useState } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (email, cookie) => {
//     setUser({ email, cookie });

//   };

//   const checkUser = () => {
//     console.log("user:  "+user.email)
//     console.log("user:  "+user.cookie)
//     if(user.email!=null && user.cookie!=null) {
//       return true;
//     }
//     else
//     {
//       return false;
//     }

//   };

//   const logout = () => {

//     doSignOut()
//   };
//   async function doSignOut() {
//     try {
//       const response = await axios.post("http://localhost:3000/victim/signout",
//         {
//           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//           withCredentials: true
//         }
//       );
//       console.log(response)
//         setUser(null);
//         document.cookie = null;

//         router.push('/loginform');
      

//     } catch (error) {
//       console.error('error failed: ', error);
//     }
//   }
//   return (
//     <AuthContext.Provider value={{ user, login, logout,checkUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  // * Making sure this code is executed on client side
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("authUser");
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  const login = (email, cookie) => {
    const newUser = { email, cookie };
    if (typeof window !== "undefined") {
      localStorage.setItem("authUser", JSON.stringify(newUser));
    }
    setUser(newUser);
    console.info("SetUser is done =", newUser);
  };

  const checkUser = () => {
    return user && user.email != null && user.cookie != null;
  };

  const logout = () => {
    doSignOut();
  };
  async function doSignOut() {
    try {
      const response = await axios.post("http://localhost:3000/victim/signout", {
        //headers: { "Content-Type": "application/x-www-form-urlencoded" },
        withCredentials: true,
      });
      console.log(response);
      localStorage.removeItem("authUser");
      setUser(null);
      document.cookie = null;

      router.push("/signin");
    } catch (error) {
      console.error("error failed: ", error);
    }
  }
  return (
    <AuthContext.Provider value={{ user, login, logout, checkUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);