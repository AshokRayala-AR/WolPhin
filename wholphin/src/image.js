import backGround from "./images/background.jpeg";
import rightArrow from "./images/right arrow.png";
import statueImage from "./images/statue.png";
import "./text.css";
function imageComponent(props) {
  const openHandler = () => {
    props.setToggler(true);
  };
  return (
    <div
      className="secondContainer"
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="image-background toggle-btns close-btn"
        onClick={openHandler}
      >
        <img className="icon-img right-arrow" src={rightArrow} alt="left" />
      </div>
      <img src={statueImage} alt="image" />
    </div>
  );
}

export default imageComponent;
