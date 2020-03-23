import React from 'react';

import UserItem from './UserItem';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <li>
          <h2>No users found.</h2>
        </li>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
