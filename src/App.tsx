import "./App.css";
import BodyText from "./components/BodyText";
import IntroText from "./components/IntroText";
import IntroVideo from "./components/IntroVideo";
import Logo from "./components/Logo";
import NavButton from "./components/NavButton";
import PhoneContact from "./components/PhoneContact";
import EmailContact from "./components/EmailContact";
import InstagramIcon from "./components/InstagramIcon";
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
              heading="Smart Advertising, Smart Result"
              content="Dapatkan hasil cerdas dengan iklan pintar, tingkatkan visibilitas."
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
                "/images/UNPAR_LOGO.svg.png",
                "http://localhost:3000/assets/images/UNPAR_LOGO.svg.png",
                "http://localhost:3000/assets/images/itb.svg",
                "http://localhost:3000/assets/images/halosis.svg"
              ]}
            />
          </div>
        </div>
        <div className="body">
          <div className="body-text">
            <BodyText
              heading="Apa itu DUNIA UMUM dan DUNIA KHUSUS (KOMUNITAS)?"
              content={
                <div>
                  <p>Dunia Umum itu apa yaa?</p>
                  <p>Dunia Umum adalah dunia yang bisa diakses oleh semua pengguna HUEHUY tanpa perlu verifikasi ke dalam komunitas kamu . Di dalam Dunia Umum, kamu bisa menjelajahi semua promosi yang tersedia. Menarik bukan?? Ayoo segera jelajahi dunia umum hanya di Huehuy Apps, dan ambil promo yang kamu suka, Sekarang!!</p>
                  <p>Apa itu dunia Khusus (Komunitas) </p>
                  <p>Ini dunia khusus hanya untuk member dunia komunitas kamu. Di Dunia Khusus (Komunitas) ini hanya bisa diakses oleh member dari komunitas yang sudah di verifikasi. Dapatkan promo yang lebih menarik dan ekslusif yang diberikan oleh merchant di dalam komunitas kamu, yang mungkin tidak bisa didapatkan oleh pengguna umum lainnya. Ayo ajak komunitas kamu bergabung dengan HUEHUY.</p>
                </div>
              }
              callToAction="how HUEHUY works"
            />
          </div>
        </div>
        <div className="body">
          <h1>KUBUS</h1>
          <div style={{ maxWidth: "60rem" }}>
            <p style={{ fontFamily: "OpenSans", fontWeight: "800", fontSize: "1rem", marginBottom: "1.4rem" }}>Kubus adalah virtual billboard yang bisa kamu miliki. Di dalam kubus kamu bisa menyebarkan promo toko, ,memasarkan marketplace, dan mempromosikan social media platform milik kamu dengan cara yang unik dan mudah.</p>
          </div>
          <div className="card-container">
            <Card 
              title="KuPU (KUBUS PUTIH)"
              description="Kubus dengan iklan yang diliat oleh pengguna, Kubus dengan iklan yang diliat oleh pengguna"
              image="http://localhost:3000/assets/images/profile-1.png"
            />
            <Card
              title="KuME (KUBUS MERAH)"
              description="Kubus dengan iklan yang diliat oleh pengguna, Menampilkan logo perusahaan kamu."
              image="http://localhost:3000/assets/images/profile-21.png"
            />
          </div>
          <div className="intro-text-section">
            <div className="intro-text-container">
              <IntroText3
                heading="COMPANY PROFILE"
                content="HUEHUY adalah sebuah platform periklanan yang menggunakan aktivitas, objek  dan lokasi berdasarkan GPS di dunia nyata untuk memasang, mencari atau menyebarkan iklan secara digital. Dilengkapi berbagai fitur untuk mensinkronisasi, mengoptimalkan dan memberi nilai tambah pada iklan dengan tujuan meningkatkan efektivitas iklan agar dapat sedekat mungkin dengan sasaran atau target yang menjadi alasan iklan tersebut dipasang."
                imageSrc="src/assets/images/logo.png"
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
            <EmailContact email={"huehuy.socmed@gmail.com"}></EmailContact>
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
