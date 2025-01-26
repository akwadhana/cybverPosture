import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const GradientButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#09C6DE] to-[#460389] text-white py-2 px-6 rounded-full ${className}`}
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
        border: '2px solid ', // Defines border, required for borderImage
        borderRadius: '9999px', // Fully rounded
        padding: '12px 24px',
        borderImage: 'linear-gradient(to right, #09C6DE, #460389) 1', // Gradient border
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


