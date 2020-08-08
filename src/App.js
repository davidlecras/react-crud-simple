import React from "react";
import Title from "./components/Title/title";
import Buttons from "./components/Button/button";
import Livres from "./containers/Livres/livres";

function App() {
  return (
    <div className="container">
      <Title>Tous nos livres!</Title>
      <Livres />
      <Buttons
        css="w-100"
        btnType="btn-success"
        clic={() => {
          console.log("ajout");
        }}
      >
        Ajouter
      </Buttons>
    </div>
  );
}

export default App;
