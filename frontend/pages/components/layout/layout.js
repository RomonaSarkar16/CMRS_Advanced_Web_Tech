
import Header from "./header";
import Footer from "./footer";
import Navigation from "./navigator";


export default function Layout({children}){
  //  title = props.title;
return (
    <>

    
       
    <Header/>
    <Navigation/>
    {/* <body> */}
    <div 
      className="main"
      >{children}</div>
   

    {/* <Footer></Footer> */}
    {/* </body> */}

    
    </>
)

}
//props obj thake page property ta extract hocche this component declaration js e
//html e property er value te jeye boshe jabe this is compnent calling
//js variable 