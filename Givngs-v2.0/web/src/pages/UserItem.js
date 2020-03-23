import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = props => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <img image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
