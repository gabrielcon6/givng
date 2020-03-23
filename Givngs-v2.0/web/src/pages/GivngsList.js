import React from 'react';

import GivngItem from './GivngItem';

const GivngsList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <li>
          <h2>No givngs found.</h2>
        </li>
      </div>
    );
  }

  return (
    <ul className="givngs-list">
      {props.items.map(givng => (
        <GivngItem
          key={givng.id}
          id={givng.id}
          theme={givng.theme}
          name={givng.name}
          date={givng.date}
          budget={givng.budget}
        />
      ))}
    </ul>
  );
};

export default GivngsList;
