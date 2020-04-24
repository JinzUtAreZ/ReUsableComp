import React, { useState } from 'react';
import InputField from '../Elements/Input/InputField';
import { Validators } from '../Elements/Input/Validator';

// export default class InputForm extends Component {
const InputForm = () => {
  //   state = {
  //     text: '',
  //   };

  const [txtInput, setTxtInput] = useState({});

  const handleChange = (key) => (value) => {
    //alert('Change Clicked');

    setTxtInput({ ...txtInput, [key]: value });

    //this.setState({ [key]: value });
  };

  //   render() {
  //const { text } = this.state;

  return (
    <div className="container">
      <h2>React Reusable Form Component</h2>
      <hr />
      <InputField
        value={txtInput.EmailLang}
        name="EmailLang"
        type="text"
        validtype="email"
        placeholder="Enter email here..."
        validators={[Validators.email, Validators.required]}
        onChange={handleChange('EmailLang')}
      />
      EmailLang
      <InputField
        value={txtInput.NumberLang}
        name="NumberLang"
        type="text"
        validtype="number"
        placeholder="Enter number here..."
        validators={[Validators.number, Validators.required]}
        onChange={handleChange('NumberLang')}
      />
      <InputField
        value={txtInput.MoneyLang}
        name="MoneyLang"
        type="text"
        validtype="money"
        placeholder="Enter money here..."
        validators={[Validators.money, Validators.required]}
        onChange={handleChange('MoneyLang')}
      />
    </div>
  );
};
// }

export default InputForm;
