import React, { useState } from 'react';
import InputField from '../Elements/Input/InputField';
import { Validators } from '../Elements/Input/Validator';

// export default class InputForm extends Component {
const InputForm = () => {
  //   state = {
  //     text: '',
  //   };

  const [txtInput, setTxtInput] = useState('');
  const [curVal, setCurVal] = useState('');
  //const previousVal = usePrevious(curVal);

  const handleChange = (key) => (value) => {
    //alert('Change Clicked');

    if (value[1] === null || value[0] === '') {
      setTxtInput({ [key]: value[0] });
      setCurVal(value[0]);
    } else if (value[1] !== null || value[1] !== undefined) {
      setTxtInput({ [key]: curVal });
    }

    //this.setState({ [key]: value });
  };

  //   render() {
  //const { text } = this.state;

  return (
    <div className="container">
      <h2>React Reusable Form Component</h2>
      <hr />
      <InputField
        //value={text}
        value={txtInput.StringLang}
        name="StringLang"
        type="text"
        placeholder="Enter text here..."
        validators={
          [Validators.number, Validators.required]
          // [
          //   { check: Validators.required, message: 'This field is required' },
          // ]
        }
        //onChange={this.handleChange('text')}
        onChange={handleChange('StringLang')}
      />

      <InputField
        //value={text}
        value={txtInput.NumberLang}
        name="NumberLang"
        type="text"
        placeholder="Enter text here..."
        validators={
          [Validators.number, Validators.required]
          // [
          //   {
          //     check: [Validators.number, Validators.required], //,
          //     //message: ['Number is not valid', 'This field is required'],
          //   },
          // ]
        }
        //onChange={this.handleChange('text')}
        onChange={handleChange('NumberLang')}
      />
    </div>
  );
};
// }

export default InputForm;
