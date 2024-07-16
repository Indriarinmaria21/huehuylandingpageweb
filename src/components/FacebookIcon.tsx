import "./Footer.css";
const FacebookIcon = () => {
  return (
    <a href="#">
      <svg
        className="icon-link"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 320"
        style={{ width: "31.35px", height: "auto" }}
      >
        <circle
          cx="160"
          cy="160"
          r="155"
          fill="transparent"
          stroke="white"
          strokeWidth="6.25"
        />
        <path
          fill="#fff"
          transform="scale(0.255) translate(467.1 350)"
          d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
        />
      </svg>
      <span className="visually-hidden">Facebook Icon Link</span>
    </a>
  );
};

export default FacebookIcon;
