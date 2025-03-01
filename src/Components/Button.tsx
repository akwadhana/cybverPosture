import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const GradientButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
    className={`bg-gradient-to-r from-[#09C6DE] to-[#460389] text-white py-2 px-6 rounded-full hover:from-[#460389] hover:to-[#09C6DE] hover:scale-105 transition-all duration-300 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
  );
};

export const NonGradientButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`py-2 rounded-2xl px-6 ${className}`}
      style={{
        border: '2px solid rounded bg-[09C6DE]', 
        borderRadius: '9999px', 
        padding: '12px 24px',
        borderImage: 'linear-gradient(to right, #09C6DE, #460389) 1', 
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


