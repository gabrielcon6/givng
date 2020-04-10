import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateGivng from './UpdateGivng';
import DeleteGivng from './DeleteGivng';

const GivngItem = props => {
  const [form, setForm] = useState(false);

  const formToggle = () => {
    setForm(!form)
    console.log(form)
  }

  return (
    <div>
        <Link to={`/${props.id}/places`}>
            <img src={props.theme} alt={props.name} height='170vh' width='300vh' />
            <h2>{props.name}</h2>
        </Link>
            <p>{props.id}</p>
            <p>{props.date}</p>
            <p>{props.budget}</p>
        
        <button onClick={formToggle}>Edit this Givng</button>
        {form && (
          <div>
          <div> Edit this Givng Below </div>
            <UpdateGivng 
              edit={props.edit} 
              id={props.id}
              name={props.name}
              theme={props.theme}
              date={props.date}
              budget={props.budget}
            />
          </div>
        )}
        <DeleteGivng delete={props.delete} id={props.id} />

    </div>
  );
};

export default GivngItem;
