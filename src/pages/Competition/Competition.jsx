import React from "react";
import "./Competition.css";
import Header from "../../components/Header/Header";
import competitionBanner from "../../assets/competition-banner.png";
import RoadToEssenOverview from "../../components/RoadToEssenOverview/RoadToEssenOverview";
import JourneyHighlight from "../../components/JourneyHighlight/JourneyHighlight";
import PartnersCarousel from "../../components/PartnersCarousel/PartnersCarousel";
import ledRte from "../../assets/led-rte.png";
import Footer from "../../components/Footer/Footer";
import julyRuleBook from "../../assets/july_rule_book.png";
import amBinh from "../../assets/am_binh.png";
import keCho from "../../assets/ke_cho.png";
import auLac from "../../assets/au_lac.png";
import batLinh from "../../assets/bat_linh.png";
import lapDia from "../../assets/lap_dia.png";
import bubbleMarket from "../../assets/bubble_market.png";
import giap from "../../assets/giap.png";
import namQuocTraanhHung from "../../assets/nam_quoc_tranh_hung.png";
import netQue from "../../assets/net_que.png";
import thoaiPhu from "../../assets/thoai_phu.png";
import trumNongSan from "../../assets/trum_nong_san.png";
import vanNguyenCam from "../../assets/van_nguyen_cam.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Competition = () => {
  const finalistData = [
    { title: "julyRuleBook", img: julyRuleBook },
    { title: "amBinh", img: amBinh },
    { title: "keCho", img: keCho },
    { title: "auLac", img: auLac },
    { title: "batLinh", img: batLinh },
    { title: "lapDia", img: lapDia },
    { title: "bubbleMarket", img: bubbleMarket },
    { title: "giap", img: giap },
    { title: "namQuocTraanhHung", img: namQuocTraanhHung },
    { title: "netQue", img: netQue },
    { title: "thoaiPhu", img: thoaiPhu },
    { title: "trumNongSan", img: trumNongSan },
    { title: "vanNguyenCam", img: vanNguyenCam },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1500, min: 464 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <div className="competition-page">
      <Header />
      <div
        style={{ backgroundImage: `url(${competitionBanner})` }}
        className="competition-banner"
      >
        <h1>Meet the champion of</h1>
        <h1>Road to Essen 2025</h1>
        <p>
          Congratulations JULY- Mr. Huu Thinh , winner of the Road to Essen 2025
          competition.
        </p>
      </div>
      <div className="year-list">
        <p>
          2025
          <span className="divider"></span>
        </p>
        <p>2026</p>
        <p>2027</p>
        <p>2028</p>
        <p>2029</p>
        <p>2030</p>
      </div>
      <RoadToEssenOverview />
      <JourneyHighlight />
      <PartnersCarousel />
      <div>
        <div className="finalists-road">
          <h1>TOP 20 FINALISTS ROAD TO ESSEN 2025</h1>
          <p>
            Explore the Top 20 standout board games selected to compete for a
            spot at Spiel Essen 2025. A showcase of innovation, cultural depth
            and strategic brilliance defining the next generation of Vietnamese
            board games.
          </p>
        </div>
        <div className="finalists-carousel">
          <Carousel
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={4000}
            keyBoardControl={false}
            customTransition="transform 1000ms ease-in-out"
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            itemClass="carousel-item"
            centerMode={true}
            showDots={false}
            dotListClass="custom-dot-list-style"
            swipeable={true}
            draggable={true}
            pauseOnHover={true}
            focusOnSelect={false}
            minimumTouchDrag={10}
            shouldResetAutoplay={true}
            slidesToSlide={1}
            additionalTransfrom={0}
          >
            {finalistData.map((finalist, index) => (
              <div key={index} className="carousel-slide">
                <img src={finalist.img} alt={finalist.title} loading="lazy" />
              </div>
            ))}
          </Carousel>
        </div>
        <h1 className="thank-you-partners">
          ROAD TO ESSEN 2025 EXTENDS ITS SINCERE GRATITUDE TO OUR PARTNERS &
          SPONSORS
        </h1>
        <img className="led-rte" src={ledRte} alt="led rte" />
      </div>
      <Footer />
    </div>
  );
};

export default Competition;
