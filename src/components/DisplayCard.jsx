import projectArrow from "../assets/icon-arrow.svg";
import banner from "../assets/Banner.png";

function DisplayCard() {
  return (
    <>
      <div className="DisplayCard">
        <div className="OuterTop"></div>
        <div className="windowOutline">
            <div className="innerTop"></div>
          <div className="ProjectCard">
            <div className="ProjectTop">
              <div className="ProjectTitle">
                Website Building{" "}
                <img className="arrow" src={projectArrow} alt="" />
              </div>
              <div className="ProjectDescription">
                <h4>FoogFunction, '24</h4>— Where food meets Health
              </div>
            </div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayCard;
