import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import PartnersCarousel from "../../components/PartnersCarousel/PartnersCarousel";
import essenBackdrop from "../../assets/essen-backdrop.png";
import BestSeller from "../../components/BestSeller/BestSeller";
import Footer from "../../components/Footer/Footer";
import ruleBook from "../../assets/rule_book.png";
import xamHuong from "../../assets/xam_huong.png";
import bunny from "../../assets/bunny.png";
import roadZodiac from "../../assets/road_zodiac.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="left-corner"></div>
        <div className="hero-container">
          <section className="hero-content">
            <h1>Highlight Games</h1>
            <div className="highlight-games">
              <div className="highlight-game-item-container highlight-game-img1">
                <img src={ruleBook} alt="rule book" />
              </div>
              <div className="highlight-game-item-container highlight-game-img2">
                <img src={xamHuong} alt="xam huong" />
              </div>
              <div className="highlight-game-item-container highlight-game-img3">
                <img src={bunny} alt="bunny" />
              </div>
              <div className="highlight-game-item-container highlight-game-img4">
                <img src={roadZodiac} alt="road zodiac" />
              </div>
            </div>
          </section>
        </div>
        <div className="right-corner"></div>
      </div>
      <PartnersCarousel />
      <img
        className="essen-backdrop"
        src={essenBackdrop}
        alt="essen-backdrop"
      />
      <BestSeller />
      <Footer />
    </div>
  );
};

export default Home;