import React from 'react';
import Button from './Button';

interface Props {
  heading: string;
  content: string;
  imageSrc: string;
}

const IntroText3: React.FC<Props> = ({ heading, content, imageSrc}) => {
  return (
    <div style={{ textAlign: 'center' }}>
    <h1
      style={{
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: '2.7rem',
        width: '100%',
        lineHeight: '1.5',
        textAlign: 'center' // Added text alignment to center the heading
      }}
    >
      {heading}
    </h1>


      <img
        src={imageSrc}
        alt="Intro Image"
        style={{
          width: '30%',
          height: 'auto',
          marginTop: '1rem',
        }}
      />

      <p
        style={{
          fontFamily: 'OpenSans',
          fontWeight: '400',
          fontSize: '1.25rem',
          margin: '2rem auto 0',
          textAlign: 'left', // Mengatur paragraf menjadi rata kiri
          width: '80%', // Mengatur lebar paragraf
        }}
      >
        <p
        style={{
          fontFamily: 'OpenSans',
          fontWeight: '400',
          fontSize: '1.25rem',
          margin: '2rem auto 0',
          textAlign: 'left', // Mengatur paragraf menjadi rata kiri
          width: '80%', // Mengatur lebar paragraf
        }}
      ></p>
        {content}
      </p>
    </div>
  );
};

export default IntroText3;
