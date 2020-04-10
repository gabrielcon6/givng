import React, { useState, useEffect } from 'react';

const NewGivng = props => {
  const [enteredValue, setEnteredValue] = useState(
    {
      id: '',
      name: '',
      theme: '',
      date: '',
      budget: ''
    }
  );

  useEffect(() => {
    setEnteredValue(enteredValue)
  }, [enteredValue])

  const handleInputChange = (e) => {
    e.preventDefault();
    setEnteredValue({
      ...enteredValue,
    [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValue = enteredValue

    setEnteredValue(
      {
        id: '',
        name: '',
        theme: '',
        date: '',
        budget: ''
      }
    );
    props.items(newValue)
  }

  return (
    <React.Fragment>
      <form className="place-form" onSubmit={handleSubmit}>
      <input
          type="text"
          name="id"
          value={enteredValue.id}
          placeholder={enteredValue.id ? enteredValue.id : 'insert id'}
          onChange={handleInputChange}
        />
        <input
          type="input"
          name="name"
          placeholder={enteredValue.name ? enteredValue.name : 'insert name'}
          onChange={handleInputChange}
        />
        <input
          type="input"
          name="theme"
          placeholder={enteredValue.theme ? enteredValue.theme : 'insert theme'}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          placeholder={enteredValue.date ? enteredValue.date : 'insert date'}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="budget"
          placeholder={enteredValue.budget ? enteredValue.budget : 'insert budget'}
          onChange={handleInputChange}
        />
        <button type="submit" >
          add new GIVNG
        </button>
      </form>
      
    </React.Fragment>
  );
};

export default NewGivng;
