import React from "react";
import img515 from "../images/img515.jpg";
import img508 from "../images/img508.jpg";
import img526 from "../images/img526.jpg";
import img456 from "../images/img456.jpg";

const Set5 = () => {
  return (
    <div className="set">
      <div className="set__container">
        <img src={img515} alt={"people"} />
      </div>
      <div className="set__container">
        <img src={img508} alt={"groupe"} />
      </div>
      <div className="set__container">
        <img src={img526} alt={"group"} />
      </div>
      <div className="set__container">
        <img src={img456} alt={"portrait"} />
      </div>
    </div>
  );
};

export default Set5;
