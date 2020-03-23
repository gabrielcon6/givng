import React from 'react';
import { Link } from 'react-router-dom';


const GivngItem = props => {
  return (
    <li>
        <Link to={`/${props.id}/places`}>
            <img src={props.theme} alt={props.name} height='170vh' width='300vh' />
            <h2>{props.name}</h2>
            <p>{props.date}</p>
            <p>{props.budget}</p>
        </Link>
    </li>
  );
};

export default GivngItem;
