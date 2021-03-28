import React from "react";
import emphasis from "../assets/svg/emphasis.svg";
import memphis from "../assets/svg/memphis.svg";
import rufus from "../assets/Images/rufus-oyemade-ifGki8ueq54-unsplash.png";
import Ellipse2 from "../assets/Images/Ellipse2.png";
import Ellipse1 from "../assets/Images/Ellipse1.png";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__hero">
        <div>
          <h2 className="homepage__text">ESE STEPHEN OWIE</h2>
          <p className="homepage__subtext">
            In the pursuit of{" "}
            <span className="emphasis-text">
              Excellence.{" "}
              <img src={emphasis} alt="" className="emphasis-text__underline" />
            </span>
          </p>
        </div>

        <img src={rufus} alt="" className="homepage__image" />
        <img src={Ellipse2} alt="Ellipse2" className="ellipse2" />
        <img src={Ellipse1} alt="Ellipse1" className="ellipse1" />
      </div>
      <img
        src={memphis}
        alt="memphis"
        style={{ maxWidth: "100%", position: "relative", zIndex: 999 }}
      />
     
    </div>
   
  );
}
