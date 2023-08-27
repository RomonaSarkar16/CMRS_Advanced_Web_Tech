// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
import "@/styles/globals.css";

import { AuthProvider } from "./utils/authcontext";

 

export default function App({ Component, pageProps }) {

  return (

    <AuthProvider>

      <Component {...pageProps} />

    </AuthProvider>

  );

}