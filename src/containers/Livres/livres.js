import React, { Component } from "react";
import Button from "../../components/Button/button";

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
  render() {
    return (
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
                <td>{livre.title}</td>
                <td>{livre.autor}</td>
                <td>{livre.pages}</td>
                <td>
                  <Button
                    btnType="btn-warning"
                    clic={() => {
                      console.log("modifier");
                    }}
                  >
                    Modifier
                  </Button>
                </td>
                <td>
                  <Button
                    btnType="btn-danger"
                    clic={() => {
                      console.log("supprimer");
                    }}
                  >
                    supprimer
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default Books;
