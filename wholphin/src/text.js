import { useState } from "react";
// import close from "./images/close.png";
import leftArrow from "./images/left direction.png";
import share from "./images/share.png";
import heartImage from "./images/heart .png";
import views from "./images/views.png";

import "./text.css";
function Text(props) {
  const [isReadMore, setIsReadMore] = useState(true);
  const [btnDisplay, setBtnDisplay] = useState(true)
  const closeHandler = () => {
    props.setToggler(false);
  };
  const readMoreHandler = () => {
    setIsReadMore(false)
    setBtnDisplay(false)
  }
  const readLessHandler = () => {
    setIsReadMore(true)
    setBtnDisplay(true)
  }

  return (
    <div className="firstContainer">
      <div className="toggler-container">
        <div className="image-background toggle-btns" onClick={closeHandler}>
          <img className="icon-img close" src={leftArrow} alt="close" />
        </div>
      </div>
      <h3>MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS</h3>
      <h3 className="abhaya-text">(ABHAYA MUDRA)</h3>
      <div className="firstDiv">
        <div className="icons">
          <div className="image-background">
            <img className="icon-img heart-img" src={heartImage} alt="" />
          </div>
          <small>10</small>
        </div>
        <div className="icons">
          <div className="image-background">
            <img className="icon-img share-img" src={share} alt="" />
          </div>
          <small>9</small>
        </div>
        <div className="icons">
          <div className="image-background">
            <img className="icon-img views-img" src={views} alt="" />
          </div>
          <small>8</small>
        </div>
      </div>

      <div className="secondDiv">
        <ul>
          <li>Dynasty : Ahichachhatra</li>
          <li>Period : 200 CE</li>
          <li>Material : Sandstone</li>
          <li> Location : National Museum</li>
        </ul>
      </div>

      <div className="thirdDiv">
        <h4>Description :</h4>

        {isReadMore ? (
          <p>
            Maitreya, the future Buddha to be, resides in the tushita heaven as
            a bodhisattva waitinf to redeem humanity. In Buddism, Maitreya is
            the eighth Buddha, a successor of the seven historical Buddhas
            (sapta-manushi Buddhas). The Digha Nikaya mentions. Maitreya Buddha
            will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As
            a bodhisattva, Maitreya wears a heavily adorned with earrings,
            wristlets, necklaces and an amulet. The ...
          </p>
        ) : (
          <p>
            Maitreya, the future Buddha to be, resides in the tushita heaven as
            a bodhisattva waitinf to redeem humanity. In Buddism, Maitreya is
            the eighth Buddha, a successor of the seven historical Buddhas
            (sapta-manushi Buddhas). The Digha Nikaya mentions. Maitreya Buddha
            will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As
            a bodhisattva, Maitreya wears a heavily adorned with earrings,
            wristlets, necklaces and an amulet. The extra text is added to make
            a toggler to the text to hide it and open it whenever required. So I
            have to add a button bottom of this section.
          </p>
        )}
        
        {btnDisplay ? (<button className="readMore" onClick={readMoreHandler}>Read More</button>) : (<button className="readLess" onClick={readLessHandler}>Read Less</button>)}
        
      </div>

      <div className="fourthDiv">
        <button className="btn-one">ADD TO COLLECTION</button>
        <button className="btn-two">SOUVENIR</button>
      </div>
    </div>
  );
}

export default Text;
