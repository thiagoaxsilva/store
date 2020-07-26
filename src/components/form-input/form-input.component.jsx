import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...inputProps }) => (
  <div className="group">
    <input onChange={handleChange} {...inputProps} className="form-input" />
    {label && (
      <label
        htmlFor={inputProps.name}
        className={`${
          inputProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
