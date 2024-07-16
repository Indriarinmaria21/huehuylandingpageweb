# Fylo dark theme landing page

This is my solution to the ['Fylo dark theme landing page' challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help me improve my coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the email is submitted if field is empty or email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`).

### Screenshot

**Big screen:**  
![Fylo Dark Theme Landing Page Screenshot1](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot1.PNG)  
![Fylo Dark Theme Landing Page Screenshot2](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot2.PNG)  
![Fylo Dark Theme Landing Page Screenshot3](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot3.PNG)  
![Fylo Dark Theme Landing Page Screenshot4](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot4.PNG)

**Mobile Screen:**  
![Fylo Dark Theme Landing Page Screenshot1-mobile](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot1-mobile.PNG)  
![Fylo Dark Theme Landing Page Screenshot2-mobile](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot2-mobile.PNG)  
![Fylo Dark Theme Landing Page Screenshot3-mobile](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot3-mobile.PNG)  
![Fylo Dark Theme Landing Page Screenshot4-mobile](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot4-mobile.PNG)  
![Fylo Dark Theme Landing Page Screenshot5-mobile](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot5-mobile.PNG)  
![Fylo Dark Theme Landing Page Screenshot6-mobile](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot6-mobile.PNG)  
![Fylo Dark Theme Landing Page Screenshot7-mobile](public/Fylo%20Dark%20Theme%20Landing%20Page%20Screenshot7-mobile.PNG)

### Links

- Solution URL: View the GitHub repository [here](https://github.com/ArinzeGit/Fylo-Dark-Theme-Landing-Page)
- Live Site URL: I have hosted the project on GitHub Pages [here](https://arinzegit.github.io/Fylo-Dark-Theme-Landing-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Flexbox](https://www.w3.org/TR/css-flexbox-1/) - CSS web layout model
- CSS grid - CSS web layout model
- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language that extends JavaScript
- [React](https://react.dev/) - JavaScript library
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Vite](https://vitejs.dev/) - React build tool with local development server

### What I learned

- I learned the `CSS grid` layout model. It gave me more control than `Flexbox` to achieve some specific layouts.

```css
.footer-items {
  display: grid;
  grid-template-columns: 11.5fr 7.85fr 3.7fr 4.87fr 4.98fr;
}
```

- I learned to use `media queries`. This is a CSS feature that allows you to apply different styles to a webpage based on various characteristics of the device or viewport on which the webpage is viewed. I used `media queries` to create a responsive design that adapts to different screen sizes.

```css
@media screen and (max-width: 1000px) {
  .features {
    grid-template-columns: 1fr; /* Change from 2by2 grid to 1by4 grid for smaller screen */
  }
}

@media screen and (max-width: 1345px) {
  .testimonial-cards {
    display: grid !important ; /*change horizontal flexbox to vertical grid for smaller screen*/
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .testimonial {
    display: inline-block; /*change from block to inline-block so that 'text-align:center' from parent can affect it*/
  }

  .testimonial-section {
    text-align: center;
  }
}

.footer-items {
  display: grid;
  grid-template-columns: 11.5fr 7.85fr 3.7fr 4.87fr 4.98fr;
}

@media screen and (max-width: 1000px) {
  /* for smaller screen */
  .footer-logo {
    margin-bottom: 100px;
  }

  .footer-items {
    grid-template-columns: 1fr;
    gap: 100px;
  }

  .footer-items .icons {
    text-align: center;
  }
}
```

- I learned about the `!important` declaration that can be added to a CSS property to override any conflicting styles on an element. I also learned that it is bad practice to overuse it as it makes CSS harder to maintain and debug and can create unexpected behavior. I allow `Normal Cascading Behavior` of CSS by relying on `specificity` rather than `!important`. I only used `!important` to override inline styles applied directly to HTML elements which is the highest `specificity`.

```css
@media screen and (max-width: 1000px) {
  .email-sign-up .input-container {
    width: 70% !important;
    margin: 0 0 3rem 0 !important;
  }

  .email-sign-up .button {
    width: 70% !important;
  }

  .email-sign-up {
    transform: translate(-50%, -65%);
  }
}
```

- I learned how to manipulate `SVG images`. The social media icons (Facebook, Instagram, Twitter) in the footer were not provided so I had to download SVG icons from [Font Awesome](https://fontawesome.com/) and [Ionicons](https://ionicons.com/). They were not exactly like the design so I had to resize their `viewbox`, rescale and center the `<path/>` using the `transform` attribute, draw a `<circle/>` around it just like the design, set and control the color on hover via the `fill` and `stroke` attributes.

```js
import "./Footer.css";
const InstagramIcon = () => {
  return (
    <a href="#">
      <svg
        className="icon-link"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{ width: "31.2px", height: "auto", marginLeft: "12.5px" }}
      >
        <circle
          cx="256"
          cy="256"
          r="250"
          fill="transparent"
          stroke="white"
          strokeWidth="10"
        />
        <path
          fill="#fff"
          transform="scale(0.474) translate(283.68 283.68)"
          d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
        />
        <path
          fill="#fff"
          transform="scale(0.474) translate(283.68 283.68)"
          d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
        />
      </svg>
      <span className="visually-hidden">Instagram Icon Link</span>
    </a>
  );
};

export default InstagramIcon;
```

```css
svg.icon-link:hover circle {
  stroke: hsl(176, 68%, 64%);
}

svg.icon-link:hover path {
  fill: hsl(176, 68%, 64%);
}
```

- I learned to control the overlap of positioned elements using `Z-index`.

```css
.testimonial {
  /* parent of .big-quotes and .testimonial-cards */
  position: relative;
}

.big-quotes {
  position: absolute;
  transform: translate(-15%, -85%);
  z-index: auto;
}

.testimonial-cards {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
}
```

- I learned that in JavaScript, when the property name and the variable name are the same, you can use shorthand notation to assign the variable directly as the property value.

```js
import "./Button.css";

interface Props {
  children: string;
  width: string;
  heightInRem: number;
  fontSize?: string;
}

const Button = ({ children, width, heightInRem, fontSize = "1rem" }: Props) => {
  const height = `${heightInRem}rem`;
  const borderRadius = `${heightInRem / 2}rem`;

  return (
    <button
      className="button"
      type="submit"
      style={{ width, height, borderRadius, fontSize }} //shorthand for style={{ width:width, height:height, borderRadius:borderRadius, fontSize:fontSize }}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Continued development

- CSS Grid
- CSS Flexbox
- Media queries
- Z-index
- Typescript
- React

I found these techniques very useful. I will continue focusing on them in future projects to refine and perfect them.

### Useful resources

- [Learn CSS Grid the easy way](https://youtu.be/rg7Fvvl3taU?si=mWUGjfoAsfhm_Ykz) - This YouTube video helped me understand CSS Grid. I'd recommend it to anyone still learning this concept.

- [Font Awesome](https://fontawesome.com/)
- [IcoMoon](https://icomoon.io/)
- [Ionicons](https://ionicons.com/)

These font icon libraries offer lots of cool icons for free.

## Author

- GitHub - [@ArinzeGit](https://github.com/ArinzeGit)
- Frontend Mentor - [@ArinzeGit](https://www.frontendmentor.io/profile/ArinzeGit)
- LinkedIn - [@Dennings-Owoh](https://www.linkedin.com/in/dennings-owoh-4839971b1/)
- Instagram - [@\_.arinze.\_](https://www.instagram.com/_.arinze._/)
- Twitter - [@Arinze98433402](https://twitter.com/Arinze98433402)
