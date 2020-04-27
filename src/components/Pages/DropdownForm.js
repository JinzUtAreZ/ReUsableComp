import React, { useState, Fragment } from 'react';
import Dropdown from '../Elements/Dropdown/DropdownTypes';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const DropdownForm = () => {
  const [ddVal, setddVal] = useState('');
  //   const animatedComponents = makeAnimated();
  //   const [isClear, setIsClear] = useState(true);
  //   const [isDisabled, setIsDisabled] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [isRtl, setIsRtl] = useState(false);
  //   const [isSearch, setIsSearch] = useState(true);

  //   const toggleClearable = () => setIsClear(!isClear);
  //   const toggleDisabled = () => setIsDisabled(!isDisabled);
  //   const toggleLoading = () => setIsLoading(!isLoading);
  //   const toggleRtl = () => setIsRtl(!isRtl);
  //   const toggleSearchable = () => setIsSearch(!isSearch);

  const dataset = [
    { value: 1, label: 'India' },
    { value: 2, label: 'USA' },
    { value: 3, label: 'UK' },
    { value: 4, label: 'Germany' },
    { value: 5, label: 'Russia' },
    { value: 6, label: 'Italy' },
  ];

  const handleDropdown = (ddVal) => {
    setddVal(ddVal);
  };

  return (
    <Fragment>
      <Dropdown
        data={dataset}
        styleClass="mt-3"
        value={ddVal}
        placeholder="Select Country"
        onChange={handleDropdown}
      />

      {/* <Select options={dataset} /> */}

      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={dataset[0]}
        name="color"
        placeholder="please Select"
        options={dataset}
        // onChange={handleDropdown}
      />
      <br />
      {/* <Select
        defaultValue={[dataset[0], dataset[1]]}
        isMulti
        name="colors"
        options={dataset}
        className="basic-multi-select"
        classNamePrefix="select1"
      />
      <br />
      <Select
        closeMenuOnSelect={false}
        defaultValue={[dataset[4], dataset[5]]}
        isMulti
        classNamePrefix="select2"
        placeholder="please Select"
        options={dataset}
      /> */}
    </Fragment>
  );
};

export default DropdownForm;
