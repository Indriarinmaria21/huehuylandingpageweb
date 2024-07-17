import React from 'react';
import "./App.css";
import AnywhereIcon from "./components/AnywhereIcon";
import BodyText from "./components/BodyText";
import CollaborationIcon from "./components/CollaborationIcon";
import FeatureCard from "./components/FeatureCard";
import IntroText from "./components/IntroText";
import IntroVideo from "./components/IntroVideo";
import Logo from "./components/Logo";
import NavButton from "./components/NavButton";
import BodyPicture from "./components/BodyPicture";
import SecurityIcon from "./components/SecurityIcon";
import StoreIcon from "./components/StoreIcon";
import TestimonialCard from "./components/TestimonialCard";
import BigQuotes from "./components/BigQuotes";
import Location from "./components/Location";
import PhoneContact from "./components/PhoneContact";
import EmailContact from "./components/EmailContact";
import FooterLink from "./components/FooterLink";
import TwitterIcon from "./components/TwitterIcon";
import InstagramIcon from "./components/InstagramIcon";
import FacebookIcon from "./components/FacebookIcon";
import Profile1 from "../src/assets/images/profile-1.jpg";
import Profile2 from "../src/assets/images/profile-2.jpg";
import Profile3 from "../src/assets/images/profile-3.jpg";
import IntroText2 from "./components/IntroText2";
import Card from './components/Card';
import IntroText3 from './components/IntroText3';

const App = () => {
  return (
    <div className="app">
      <nav>
        <div className="header-logo">
          <Logo />
        </div>
        <div className="nav-bar">
          <NavButton targetId="home-section" >Home</NavButton>
          <NavButton targetId="about-section" >About</NavButton>
          <NavButton targetId="contact-section" >Our Partner</NavButton>
        </div>
      </nav>
      <main>
        <div id="home-section" className="intro-picture">
          <IntroVideo />
        </div>
        <div id="about-section" className="intro-text-section">
          <div className="intro-text-container">
            <IntroText
              heading="Smart advertising, Smart result"
              content="Dapatkan Hasil Cerdas dengan Iklan Pintar. Tingkatkan visibilitas bisnis Anda dan raih target pasar yang tepat dengan strategi iklan pintar kami. Gabungkan teknologi dan kreativitas untuk hasil yang maksimal! Bergabunglah dengan platform kami dan saksikan bisnis Anda berkembang pesat!"
              buttonText1="PlayStore"
              buttonUrl1='https://play.google.com/store/apps/details?id=com.huehuy.app.twa&pcampaignid=web_share'
              buttonText2='Website'
              buttonUrl2='https://app.huehuy.com/'
            />
          </div>
        </div>
        <div id="contact-section" className="intro-text-section">
          <div className="intro-text-container">
            <IntroText2
              heading="Our Partner"
              pics={[
                "src/assets/images/UNPAR_LOGO.svg.png",
                "src/assets/images/bank-mandiri-seeklogo.svg",
                "src/assets/images/itb.svg",
                "src/assets/images/halosis.svg"
              ]}
            />
          </div>
        </div>
        <div className="body">
          <div className="body-text">
            <BodyText
              heading="Apa itu DUNIA UMUM dan DUNIA KOMUNITAS?"
              content={
                <div>
                  <p>Dunia Umum itu apa yaa?</p>
                  <p>Dunia Umum adalah dunia yang bisa diakses oleh semua pengguna Huehuy Apps tanpa perlu akses khusus. Di dalam Dunia Umum, kamu bisa menjelajahi semua promosi yang tersedia. Menarik bukan?? Ayoo segera jelajahi dunia umum hanya di Huehuy Apps, dan ambil promo yang kamu suka, Sekarang!!</p>
                  <p>Laluu, Dunia Komunitas ituu apa yaa?</p>
                  <p>Ini dunia khusus komunitas kamu! Di dunia komunitas ini, hanya bisa diakses oleh kamu dan member komunitas. khusus dunia komunitas, kamu bisa mendapatkan promo yang lebih banyak dan ekslusif untuk member komunitas kamu.</p>
                </div>
              }
              callToAction="how Huehuy works"
            />
          </div>
        </div>
        <div className="body">
          <h1>KUBUS</h1>
          <div style={{ maxWidth: "60rem" }}>
            <p style={{ fontFamily: "OpenSans", fontWeight: "800", fontSize: "1rem", marginBottom: "1.4rem" }}>Kubus adalah virtual billboard yang bisa kamu miliki. di dalam kubus kamu bisa menyimpan promo dari toko kamu dan bisa dilihat oleh pengguna huehuy</p>
          </div>
          <div className="card-container">
            <Card 
              title="KUPU (KUBUS PUTIH)"
              description="Dapat menyimpan ads/ NO ADS FREE, tidak ada logo perusahaan"
              image="src/assets/images/profile-1.png"
            />
            <Card
              title="KUME (KUBUS MERAH)"
              description="Tidak dapat menyimpan ADS / ADS FREE, ada logo perusahaan"
              image="src/assets/images/profile-21.png"
            />
          </div>
          <div className="intro-text-section">
            <div className="intro-text-container">
              <IntroText3
                heading="COMPANY PROFILE"
                content="Huehuy adalah sebuah platform periklanan yang menggunakan aktivitas, objek  dan lokasi berdasarkan GPS di dunia nyata untuk memasang, mencari atau menyebarkan iklan secara digital. Dilengkapi berbagai fitur untuk mensinkronisasi, mengoptimalkan dan memberi nilai tambah pada iklan dengan tujuan meningkatkan efektivitas iklan agar dapat sedekat mungkin dengan sasaran atau target yang menjadi alasan iklan tersebut dipasang."
                imageSrc='src/assets/images/logo.png'
              />
            </div>
            <p style={{ textAlign: 'center', fontFamily: 'OpenSans', fontWeight: '700', fontSize: '1rem', marginTop: '1rem' }}>
              No DUNS: 727207172
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-items">
          <div>
            <PhoneContact>+6287822016661</PhoneContact>
            <EmailContact>huehuy.socmed@gmail.com</EmailContact>
          </div>
          {/* <div>
            <FooterLink>Home</FooterLink>
            <FooterLink>About</FooterLink>
            <FooterLink>Press</FooterLink>
            <FooterLink>Blog</FooterLink>
          </div>
          <div>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Terms</FooterLink>
            <FooterLink>Privacy</FooterLink>
          </div> */}
          <div className="icons">
            {/* <FacebookIcon /> */}
              {/* <TwitterIcon /> */}
            <InstagramIcon />
          </div>
        </div>
        <div className="attribution">
          -PT Jejaring Andal Nusantara-
        </div>
      </footer>
    </div>
  );
};

export default App;
