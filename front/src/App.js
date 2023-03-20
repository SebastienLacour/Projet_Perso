import React, { useContext } from "react";

//Importation du style de l'application
import './style/style.css'

//Importation des composants
import FormAuth from "./components/FormAuth";
import Header from "./components/Header";
import AuthContext from "./components/context/AuthContext";
import Footer from "./components/Footer";

//Importation du context



function App() {

  const authCtx = useContext(AuthContext)

  const isLoggedIn = authCtx.isLoggedIn


  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn}/>
      <FormAuth/>
      <Footer/>
    </div>
  );
}

export default App;
