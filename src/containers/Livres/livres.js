import React, { Component } from "react";
import AddNewBook from "./AddNewBook/addNewBook";
import Livre from "./Livre/livre";

class Books extends Component {
  state = {
    livres: [
      {
        id: 1,
        title: "Le coeur a ses raisons",
        autor: "Georges W. Bush",
        pages: 300,
      },
      { id: 2, title: "Vive le code", autor: "Bill Gates", pages: 750 },
      { id: 3, title: "JS pour les nuls", autor: "El barto", pages: 50 },
    ],
  };

  bookSuppHandler = (id) => {
    const livreIndexTab = this.state.livres.findIndex((element) => {
      return element.id === id;
    });
    const newTabLivres = [...this.state.livres];
    newTabLivres.splice(livreIndexTab, 1);
    this.setState({ livres: newTabLivres });
  };

  bookAddHandler = (title, autor, pages) => {
    console.log(title);
    console.log(autor);
    console.log(pages);
  };
  render() {
    return (
      <>
        <table className="table text-center">
          <thead>
            <tr className="table-dark">
              <th>Titres</th>
              <th>Auteurs</th>
              <th>Nombres de pages</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.livres.map((livre) => {
              return (
                <tr key={livre.id}>
                  <Livre
                    title={livre.title}
                    autor={livre.autor}
                    pages={livre.pages}
                    supprimer={() => this.bookSuppHandler(livre.id)}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.props.ajoutLivre && (
          <AddNewBook validating={this.bookAddHandler} />
        )}
      </>
    );
  }
}
export default Books;
