
import classes from './addNewBook.module.css'

import React, { Component } from 'react';

class AddNewBook extends Component{
  render() {
    const monCss= `${classes.newForm}  p-2 mt-2 text-primary text-center`;
    return(
      <h2 className={monCss}> Ajout d'un livre</h2>
    )
  }
}
export default AddNewBook;