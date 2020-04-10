import React from 'react';

const DeleteGivng = props => {

  const handleDelete = () => {
    props.delete(props.id)
  }

  return (
    <React.Fragment>
      <button onClick={handleDelete}>Delete</button>
    </React.Fragment>
  );
};

export default DeleteGivng;
