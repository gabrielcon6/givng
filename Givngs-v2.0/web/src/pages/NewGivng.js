import React, { useState, preventDefault, useEffect } from 'react';
import GivngsList from './GivngsList';

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
    console.log('Estou funcionando')
    console.log('just inserted after useEffect:', enteredValue)
  }, [enteredValue])

  const handleInputChange = (e) => {
    e.preventDefault();
    setEnteredValue({
      ...enteredValue,
    [e.target.name]: e.target.value
    })
    console.log('just inserted:', enteredValue)
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
    console.log('my items now:', props.items)
    console.log('my state now:', enteredValue)
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
