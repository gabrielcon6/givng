import React from "react";
import axios from "axios";

function App() {

  axios.post(`http://localhost:3000/api/users`, {
    user: {
        name: 'Aaron Cox',
        email: 'aaron@ga.com.au',
        password: 'abc123',
        password_confirmation: 'abc123'
    }
}).then(response => {
    console.log('Successfully created user: ')
    console.log(response);
}).catch(err => {
    console.log('Failed to create user with error: ')
    console.log(err);
});


  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}

export default App;
