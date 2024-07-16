import React from 'react';

interface ButtonProps {
  width: string;
  heightInRem: number;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ width, heightInRem, onClick, children }) => {
  return (
    <button
      style={{
        width,
        height: `${heightInRem}rem`,
        backgroundColor: 'teal',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1.25rem', // Increased font size
        padding: '0.75rem 1.5rem' // Added padding
      }}
      onClick={onClick}
    >
      <a
        className="footer-link"
        href="#"
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "1rem",
        }}
      >
        {/* {children} */}
      </a>
      {children}
    </button>
  );
};

export default Button;
