import React from "react";
import "./BestSeller.css";
import bestSeller1 from "../../assets/best_seller_1.png";
import bestSeller2 from "../../assets/best_seller_2.png";
import bestSeller3 from "../../assets/best_seller_3.png";
import bestSeller4 from "../../assets/best_seller_4.png";

const products = [
  {
    id: 1,
    name: "Galactic super beastS",
    image: bestSeller1,
  },
  {
    id: 2,
    name: "ZODIAC RUSH",
    image: bestSeller2,
  },
  {
    id: 3,
    name: "XĂM HƯỜNG",
    image: bestSeller3,
  },
  {
    id: 4,
    name: "BUNNY 100",
    image: bestSeller4,
  },
];

const BestSeller = () => {
  return (
    <section className="best-seller-section">
      <h2 className="section-title">BEST SELLER</h2>

      <div className="best-seller-grid">
        {products.map((item) => (
          <div key={item.id} className="best-seller-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <button className="more-btn">MORE</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
