import statueImage from './images/statue.png';
function Text() {
  return (
    <div>
      <h3>MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS</h3>
      <h3>(ABHAYA MUDRA)</h3>
      <div>
        <div>
        {/* <img src={ } alt=''/> */}
          <small></small>
        </div>
        <div>
        {/* <img src={ } alt=''/> */}
          <small></small>
        </div>
        <div>
        {/* <img src={ } alt=''/> */}
          <small></small>
        </div>
      </div>
      <div>
        <p>Dynasty : Ahichachhatra</p>
        <p>Period : 200 CE</p>
        <p>Material : Sandstone</p>
        <p> Location : National Museum</p>
      </div>
      <div>
        <h4>Description :</h4>
        <p>Maitreya, the future Buddha to be, resides in the tushita heaven as a bodhisattva waitinf to redeem humanity. In Buddism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The  Digha Nikaya mentions. Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces and an amulet. the</p>
      </div>
      <div>
        <button>ADD TO COLLECTION</button>
        <button>SOUVENIR</button>
      </div>
      <div>
        <img src={statueImage} alt='image'/>
        
      </div>
    </div>
  );
}

export default Text;