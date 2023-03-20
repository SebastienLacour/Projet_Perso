import React, { useContext } from "react";

//Importation du style de l'application
import './style/style.css'

//Importation des composants
import FormAuth from "./components/FormAuth";
import AuthContext from "./components/context/AuthContext";

//Importation du context



function App() {

  return (
    <div className="App">
      <FormAuth/>
    </div>
  );
}

export default App;
