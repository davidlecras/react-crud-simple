import classes from "./addNewBook.module.css";
import Button from "../../../components/Button/button";

import React, { Component } from "react";

class AddNewBook extends Component {
  state = {
    titleFiled: "",
    autorFiled: "",
    pagesNumber: "",
  };

  validationFormHandler = (e) => {
    e.preventDefault();
    this.props.validating(
      this.state.titleFiled,
      this.state.autorFiled,
      this.state.pagesNumber
    );
    this.setState({
      titleFiled: "",
      autorFiled: "",
      pagesNumber: "",
    })
  };
  render() {
    const monCss = `${classes.newForm}  p-2 mt-2 text-primary text-center`;
    return (
      <>
        <h2 className={monCss}> Ajout d'un livre</h2>
        {/* Création d'un composant controlé */}
        <form>
          <div className="form-group">
            <label htmlFor="title">Titre du livre</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={this.state.titleFiled} //On récupère la valeur de l'input
              onChange={(event) =>
                this.setState({ titleFiled: event.target.value })
              } //On met à jour le state pour le traitement futur du formulaire
            />
          </div>
          <div className="form-group">
            <label htmlFor="autor">Auteur</label>
            <input
              type="text"
              className="form-control"
              id="autor"
              value={this.state.autorFiled}
              onChange={(event) =>
                this.setState({ autorFiled: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="number-of-pages">Nombre de pages</label>
            <input
              type="number"
              className="form-control"
              id="number-of-pages"
              value={this.state.pagesNumber}
              onChange={(event) =>
                this.setState({ pagesNumber: event.target.value })
              }
            />
          </div>
          <Button btnType="btn-primary" clic={this.validationFormHandler}>
            Valider
          </Button>
        </form>
      </>
    );
  }
}
export default AddNewBook;
