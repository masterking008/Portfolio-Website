import DisplayCard from "./DisplayCard";
import DownArrow from "../assets/icon-arrow-down.svg"

function Hero() {
  return (
    <>
      <div className="HeroSection">
        <DisplayCard />
        <div className="heroFade">
          <img className="downArrow" src={DownArrow} />
        </div>
        <div className="heroNoise"></div>
      </div>
    </>
  );
}

export default Hero;
