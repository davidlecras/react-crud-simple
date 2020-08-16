import React from 'react';

const alert=(props)=>{
  return(
    <div className="alert alert-success text-center" role="alert">
  {props.children}
</div>
  )
}

export default alert;