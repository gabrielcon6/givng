import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { Checkbox } from '@thumbtack/thumbprint-react';

// import Input from '../../../shared/components/FormElements/Input';
// import Button from '../../../shared/components/FormElements/Button';
// import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
// import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
// import { VALIDATOR_REQUIRE } from '../../../shared/util/validators';
// import { useForm } from '../../../shared/hooks/form-hook';
// import { useHttpClient } from '../../../shared/hooks/http-hook';
// import { AuthContext } from '../context/auth-context';
// import '../../../places/pages/PlaceForm.css';

const NewGivng = props => {
//   const auth = useContext(AuthContext);
//   const { isLoading, error, sendRequest, clearError } = useHttpClient();
//   const [check, setCheck] = useState(false);
  const [formState, inputHandler] = useState(
    {
      id: {
        value: '',
        isValid: false
      },
      name: {
        value: '',
        isValid: false
      },
      theme: {
        value: '',
        isValid: false
      },
      date: {
        value: null,
        isValid: false
      },
      budget: {
        value: null,
        isValid: false
      }
    },
    false
  );

//   const experienceSubmitHandler = async event => {
//     event.preventDefault();
//   try {
//     await sendRequest(
//       '/api/experiences',
//       'POST',
//       JSON.stringify({
//         title: formState.inputs.title.value,
//         company: formState.inputs.company.value,
//         startDate: formState.inputs.startDate.value,
//         endDate: formState.inputs.endDate.value,
//         description: formState.inputs.description.value,
//       }),
//       { 
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer ' + auth.token
//      }
//     );
//   } catch (err) {}
//   history.push('/');
//   history.push('/' + auth.userId + '/profile');
// };
    console.log(props.items)
  return (
    <React.Fragment>
      <form className="place-form">
        <input
          id="id"
          element="input"
          type="text"
          label="id"
          onInput={inputHandler}
        />
        <input
          id="name"
          element="input"
          type="text"
          label="name"
          onInput={inputHandler}
        />
        <input
          id="theme"
          element="input"
          type="text"
          label="theme"
          onInput={inputHandler}
        />
         <input
          id="date"
          element="date"
          type="date"
          label="date"
          onInput={inputHandler}
        />
         <input
          id="budget"
          element="input"
          type="number"
          label="budget"
          onInput={inputHandler}
        />
        <button type="submit" >
          add new GIVNG
        </button>
      </form>
    </React.Fragment>
  );
};

export default NewGivng;
