import React from 'react';
import './custom.button.styles.scss';
export default function CustomButton({ children, isGoogleButton, ...props }) {
  return (
    <button
      className={`${isGoogleButton ? 'google-sign-in' : ''} custom-button `}
      {...props}
    >
      {children}
    </button>
  );
}
