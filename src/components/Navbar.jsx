import logo from "../assets/black.svg";
import external from "../assets/icon-external.svg";

function Navbar() {

  return (
    <>
      <div className="NavSection">
        <div className="Navbar">
          <div className="NavLeft">
            <img src={logo} alt="" height={"52px"} />
            <div className="LogoText">
              <p className="myName">Dinesh Sahu</p>
              <p>Website Designer</p>
            </div>
          </div>
          <div className="NavCenter">
            <div className="glow"></div>
            <div className="NavPill">
              <button className="PillBtns work">Work</button>
              <button className="PillBtns info">Info</button>
            </div>
            <div className="indicator"></div>
          </div>
          <div className="NavRight">
            <a href="">
              LinkedIn
              <img src={external} alt="" />
            </a>
            <a href="">
              Resume
              <img src={external} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
