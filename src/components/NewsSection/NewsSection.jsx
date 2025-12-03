import React from "react";
import "./NewsSection.css";
import PartnersCarousel from "../PartnersCarousel/PartnersCarousel";
import competitionBanner from "../../assets/competition-banner.png";

const NewsSection = () => {
  const newsItems = [
    {
      title: "ROAD TO ESSEN 2025",
      description: "At Fitness Evolution, we have built a meaningful",
      date: "15 Mar 2025",
      image: "/images/news1.jpg",
    },
    {
      title: "ROAD TO ESSEN 2025",
      description: "At Fitness Evolution, we have built a meaningful",
      date: "15 Mar 2025",
      image: "/images/news2.jpg",
    },
    {
      title: "ROAD TO ESSEN 2025",
      description: "At Fitness Evolution, we have built a meaningful",
      date: "15 Mar 2025",
      image: "/images/news3.jpg",
    },
    {
      title: "ROAD TO ESSEN 2025",
      description: "At Fitness Evolution, we have built a meaningful",
      date: "15 Mar 2025",
      image: "/images/news4.jpg",
    },
  ];

  return (
    <section className="news-section">
      <h2 className="news-title">NEWS</h2>

      <div className="news-container">
        {/* Main news item */}
        <div
          className="news-main"
          style={{ backgroundImage: `url(${competitionBanner})` }}
        >
          <a
            href="https://boardgamewire.com/index.php/2025/09/24/theres-no-shortage-of-creativity-in-vietnam-what-we-lack-are-bridges-vietnams-blossoming-board-game-design-scene-goes-global-via-first-road-to-essen-competition/"
            className="news-main-text"
            target="_blank"
            rel="noreferrer"
          >
            “There’s no shortage of creativity in Vietnam. What we lack are
            bridges”: Vietnam’s blossoming board game design scene goes global
            via first Road to Essen competition.
          </a>
        </div>

        {/* News list */}
        <div className="news-list">
          {newsItems.map((item, index) => (
            <div className="news-item" key={index}>
              <div className="news-thumb"></div>
              <div className="news-info">
                <h4 className="news-item-title">{item.title}</h4>
                <p className="news-item-desc">{item.description}</p>
                <span className="news-item-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PartnersCarousel />
    </section>
  );
};

export default NewsSection;
