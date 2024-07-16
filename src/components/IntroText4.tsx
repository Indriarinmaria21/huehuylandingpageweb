import React from 'react';
import IntroPicture from './IntroPicture';
import IntroPictureSrc1 from '../../src/assets/images/illustration-intro.png'; // First image source
import IntroPictureSrc2 from '../../src/assets/images/illustration-intro2.png'; // Second image source
import Card2 from './IntroPicture';

interface Props {
  heading1: string;
  content1: string;
  buttonText1: string;
  heading2: string;
  content2: string;
  buttonText2: string;
}

const IntroText = ({ heading1, content1, buttonText1, heading2, content2, buttonText2 }: Props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <Card2
        imageSrc={IntroPictureSrc1}
        heading={heading1}
        content={content1}
        buttonText={buttonText1}
      />
      <Card2
        imageSrc={IntroPictureSrc2}
        heading={heading2}
        content={content2}
        buttonText={buttonText2}
      />
    </div>
  );
};

export default IntroText;
