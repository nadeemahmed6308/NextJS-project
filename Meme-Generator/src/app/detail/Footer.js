// Footer.js
import './styles.css';
import Link from "next/link";

const Footer = () => {
  return (<>
    <footer>
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="social_icon">
        <li><Link href="#"><ion-icon name="logo-facebook"></ion-icon></Link></li>
        <li><Link href="#"><ion-icon name="logo-twitter"></ion-icon></Link></li>
        <li><Link href="#"><ion-icon name="logo-linkedin"></ion-icon></Link></li>
        <li><Link href="#"><ion-icon name="logo-instagram"></ion-icon></Link></li>
      </ul>

      <ul class="menu">


        <li><Link class="text-dark fs-4" href="https://github.com/nadeemahmed6308/JS-ASSIGNMENTS" target="_blank" rel="noreferrer">Github</Link></li>
        {" "} Made with ❤️ by {" "}
        <li> <Link href="https://www.linkedin.com/in/nadeem-ahmed786" class="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Nadeem Ahmed</Link></li>

      

      </ul>
      {/* <p>&copy2021 Prakash Sahu | All Rights Reserved</p> */}

    </footer>
    <div className="bg-gray-800 p-3 text-white text-center w-full">
      <p>&copy; 2024 Your Website Name. All rights reserved.</p>
    </div>

  </>
  );
};

export default Footer;

////////////////////////////
import React from "react";
