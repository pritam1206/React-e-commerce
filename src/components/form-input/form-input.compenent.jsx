import React from 'react';
import './form-input.styles.scss';
export default function formInputComponent({ handlechange, label, ...props }) {
  return (
    <div className='group'>
      <input className='form-input' {...props} onChange={handlechange} />
      {label ? (
        <label
          className={`${props.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
