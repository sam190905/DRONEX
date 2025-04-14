import React from "react";
import "../../public/footer.css";
import { NavLink } from "react-router-dom";


function Footer(props) {
  function emailsubmit(event){
  event.preventDefault();
  const emailInput = document.getElementById("emailInput");
    if (emailInput.validity.valid) {
      alert("Subscribed succesfully!");

    } else {
      alert("Enter a valid email")
    }
  }
  return (
    <div className="footerclass">
      <div className="footerelements">
        <div>
          <div className="logoelement">
            <p>DRONEX</p>
          </div>
          <div className="sentence">Fly beyond Limits! 🚀</div>

        </div>
        <div className="footer-links">
                    <h4>🔗<span> </span>Quick Links</h4>
                    <ul>
                        <li id='shop' onClick={props.scroll} >Shop</li>
                        <li><NavLink className="nav" to='/About'>About Us</NavLink></li>
                        <li>Support</li>
                        <li>Contact</li>
                    </ul>
                </div>
        <div className="contact">
          <h4>CONTACT US</h4>
          <br></br>
          <div className="links">
            <img src="/media/logos/instagram .png"></img>
            <img src="/media/logos/facebook.png"></img>
            <img src="/media/logos/twitter.png"></img>
            <img src="/media/logos/gmail.png"></img>
          </div>
          <br></br>
          <p>📞 Customer-care : <span> </span>445454178</p>
          <p>📧 Mail us at:<span> </span> dronex@gmail.com</p>
        </div>
        <div className="email">
        <h4>Subscribe to get latest updates!</h4>
                    <form onSubmit={emailsubmit} className="newsletter-form">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            required 
                            id="emailInput"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                    <p>(You will receive emails as soon as we launch new products or any exciting offer)</p>

        </div>
      </div>
      <p>|-Developed by Samarth Purant-|</p>
      <p className="foot">
        <p>&copy; {new Date().getFullYear()} Dronex. All rights reserved.</p>
      </p>
    </div>
  );
}
export default Footer;
