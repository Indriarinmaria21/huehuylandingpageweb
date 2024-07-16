import React from 'react';
import Button from './Button';

interface Props {
  heading: string;
  content: string;
  buttonText1: string;
  buttonUrl1: string; // URL untuk Button 1
  buttonText2: string;
  buttonUrl2: string; // URL untuk Button 2
}

const IntroText: React.FC<Props> = ({ heading, content, buttonText1, buttonUrl1, buttonText2, buttonUrl2 }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1
        style={{
          fontFamily: 'Raleway',
          fontWeight: '700',
          fontSize: '2.505rem',
          width: '100%',
          lineHeight: '1.5',
        }}
      >
        {heading}
      </h1>

      <p
        style={{
          fontFamily: 'OpenSans',
          fontWeight: '400',
          fontSize: '1.25rem',
          margin: '2rem auto 0',
        }}
      >
        {content}
      </p>

      <div style={{ marginTop: '2.1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href={buttonUrl1} target="_blank" rel="noopener noreferrer">
          <Button width="min(277.92px, 100%)" heightInRem={3.3}>
            {buttonText1}
          </Button>
        </a>
        <a href={buttonUrl2} target="_blank" rel="noopener noreferrer">
          <Button width="min(277.92px, 100%)" heightInRem={3.3}>
            {buttonText2}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default IntroText;
