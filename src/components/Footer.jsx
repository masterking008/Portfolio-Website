import logo from "../assets/black.svg";
import external from "../assets/icon-external.svg"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerTop">
          <div className="footerLogo">
            <img src={logo} alt="Logo of Dinesh Sahu" />
          </div>
          <div className="footerLinks">
            <div className="LinkMain">
              <p className="LinkHead">MAIN</p>
              <a href="">Work</a>
              <a href="">Info</a>
            </div>
            <div className="LinkContact">
              <p className="LinkHead">CONTACT</p>
              <a href="">LinkedIn <img src={external} alt="" /></a>
              <a href="">Resume <img src={external} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerBottomLeft">
            <div className="copyrights">
              © 2024 Dinesh Sahu. All Rights Reserved.
            </div>
            <p className="made">Made with love.</p>
          </div>
          <div className="footerBottomRight">
            Last updated by Dinesh on August 2024
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
