import React from "react";

//Importation du style de l'application
import './style/style.css'

//Importation des composants
import FormAuth from "./components/FormAuth";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <FormAuth/>
    </div>
  );
}

export default App;
