import React from 'react';
import PropTypes from 'prop-types';

const DropdownTypes = ({ value, data, placeholder, styleClass, onChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className={`form-group ${styleClass}`}>
      <select value={value} className="form-control" onChange={handleChange}>
        <option value="">{placeholder}</option>
        {data.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

DropdownTypes.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  styleClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

DropdownTypes.defaultProps = {
  value: '',
  styleClass: '',
  placeholder: '',
};

export default DropdownTypes;
