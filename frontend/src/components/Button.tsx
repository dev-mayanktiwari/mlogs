import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'; 
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  text: string;
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, text, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-backgroundlight text-primary-foreground py-2 px-4 rounded-md font-myFont ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled} 
    >
      {text}
    </button>
  );
}

export default Button;