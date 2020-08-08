import React from 'react';
import Title from './components/Title/title';
import Buttons from './components/Button/button'

function App() {
  return (
    <div className="container">
    <Title>Tous nos livres!</Title>
    <div>les livres</div>
    <Buttons btnType="btn-success" clic={()=>{console.log('ajout')}}>Ajouter</Buttons>
    <Buttons btnType="btn-warning" clic={()=>{console.log('modife')}}>Modifier</Buttons>
    <Buttons btnType="btn-danger" clic={()=>{console.log('supprime')}}>Supprimer</Buttons>
    </div>
  )
}

export default App;
