import React from "react";
import About from "./component/about/About";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Experience from "./component/experience/Experience";
import Services from "./component/Services/Service"
import Contact from "./component/contact/Contact"
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <div>
      <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Services/>
     <Contact/>
     <Footer/>

    </div>
  )
}

export default App;