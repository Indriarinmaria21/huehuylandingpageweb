// import React from 'react';
// import './Footer.css';

// interface NavButtonProps {
//   children: string;
//   targetId: string;
//   backgroundColor?: string;
// }

// const NavButton: React.FC<NavButtonProps> = ({ children, targetId }) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     event.preventDefault();
//     const element = document.getElementById(targetId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div style={{ marginBottom: '0.85rem' }}>
//       <button
//         className="nav-button"
//         onClick={handleClick}
//         style={{
//           fontFamily: 'OpenSans',
//           fontWeight: '400',
//           fontSize: '1rem',
//           // backgroundColor: backgroundColor,
//           border: 'none',
//           cursor: 'pointer',
//           padding: 0,
//           textAlign: 'left',
//             // color: 'inherit',
//         }}
//       >
//         {children}
//       </button>
//     </div>
//   );
// };

// export default NavButton;

import React from 'react';
import './NavButton.css';

interface NavButtonProps {
  children: string;
  targetId: string;
  // backgroundColor: string;
}

const NavButton: React.FC<NavButtonProps> = ({ children, targetId }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ marginBottom: '0.55rem' }}>
      <button
        className="nav-button"
        onClick={handleClick}
        style={{
          fontFamily: 'OpenSans',
          fontWeight: '400',
          fontSize: '1rem',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          textAlign: 'left',
          color: 'inherit',
          backgroundColor:'black'
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default NavButton;