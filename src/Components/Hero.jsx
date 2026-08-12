import img2 from "../assets/Images/net-banner.jpg";
 import "../Styles/Hero.css";

function Hero(){
    return(
       <section className="hero">
        <img src={img2} alt="Netflix banner" />
        <div className="overlay-content">
          <h1>Netflix</h1>
          <p>Watch anywhere. Cancel anytime.</p>

          <div className="hero-buttons">
            <button>Play</button>
            <button>More Info</button>
          </div>
        </div>
      </section>
    )
}

export default Hero;