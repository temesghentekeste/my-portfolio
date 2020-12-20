import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <SocialLinks styleClass="social-links"/>
    <h4>copyright&copy; {new Date().getFullYear()}
    <span>temesghen</span> all rights reserved</h4>
  </footer>
}

export default Footer
