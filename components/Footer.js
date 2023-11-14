import React from "react";
import "./Footer.css"
export default function Footer(){
  return (
    <>
      <footer>
        <p className="logo_footer">BikeCheck</p>
        <p className="texto_footer">Nos acompanhe nas redes sociais</p>
        <a href="http://www.facebook.com">
          <img className="footer_img" src="https://cdn-icons-png.flaticon.com/256/20/20673.png"/>
        </a>
        <a href="http://www.x.com">
          <img className="footer_img" alt="X" src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000" />
        </a>
        <a href="http://www.linkedin.com">
          <img className="footer_img" alt="LinkedIn" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"/>
        </a>
        <a href="http://www.instagram.com">
          <img className="footer_img" alt="Instagram" src="https://cdn-icons-png.flaticon.com/512/3670/3670274.png" h/>
        </a>
        
      </footer>
      
    </>
  )
}