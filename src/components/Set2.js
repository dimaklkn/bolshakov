import React from "react";
import img495 from "../images/img495.jpg";
import img490 from "../images/img490.jpg";
import img492 from "../images/img492.jpg";
import img505 from "../images/img505.jpg";

const Set2 = () => {
  return (
    <div className="set">
      <div className="set__container">
        <img src={img490} alt={"portrai of man"} />
      </div>
      <div className="set__container">
        <img src={img495} alt={"portrai of woman and a boy"} />
      </div>
      <div className="set__container">
        <img src={img492} alt={"portrai of old woman"} />
      </div>
      <div className="set__container">
        <img src={img505} alt={"portrai of two man"} />
      </div>
    </div>
  );
};

export default Set2;
