import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...buttomProps
}) => (
  <button
    className={` ${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...buttomProps}
  >
    {children}
  </button>
);

export default CustomButton;
