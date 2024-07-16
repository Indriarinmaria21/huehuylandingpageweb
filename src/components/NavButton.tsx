import React from 'react';
import './Footer.css';

interface NavButtonProps {
  children: string;
  href: string;
}

const NavButton: React.FC<NavButtonProps> = ({ children, href }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ marginBottom: '0.85rem' }}>
      <button
        className="nav-button"
        onClick={handleClick}
        style={{
          fontFamily: 'OpenSans',
          fontWeight: '400',
          fontSize: '1rem',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          textAlign: 'left',
          color: 'inherit',
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default NavButton;
