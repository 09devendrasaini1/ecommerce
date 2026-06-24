import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>MitraMart</h2>
          <p>Your one-stop shop for everything.</p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-box">
          <h3>Support</h3>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MitraMart. All Rights Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer