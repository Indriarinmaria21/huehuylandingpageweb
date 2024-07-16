import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CardProps {
  heading: string;
  pic: string;
}

function Card({ heading, pic }: CardProps) {
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "5px", // Kurangi padding untuk memperkecil ukuran kartu
        margin: "1px", // Kurangi margin untuk memperkecil jarak antar kartu
        width: "180px", // Kurangi lebar kartu
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200px", // Kurangi tinggi kartu
        boxShadow: "0px 4px 8px rgba(1, 1, 1, 1)"
      }}
    >
      <img
        src={pic}
        alt="Card"
        style={{
          maxWidth: "100%",
          height: "auto",
          marginTop: "5px", // Kurangi margin untuk gambar
        }}
      />
    </div>
  );
}

interface IntroText2Props {
  heading: string;
  pics: string[];
}

function IntroText2({ heading, pics }: IntroText2Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 850, // Ubah ini sesuai dengan interval waktu yang diinginkan (dalam milidetik)
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontFamily: "Raleway",
          fontWeight: "700",
          fontSize: "2.505rem",
          width: "100%",
          lineHeight: "1.5",
        }}
      >
        {heading}
      </h1>
      <Slider {...settings} style={{ marginTop: "20px" }}>
        {pics.map((pic, index) => (
          <Card key={index} heading={`Card ${index + 1}`} pic={pic} />
        ))}
      </Slider>
    </div>
  );
}

export default IntroText2;
