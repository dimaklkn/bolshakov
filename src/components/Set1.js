import React from "react";
import img426 from "../images/img426.jpg";
import img442 from "../images/img442.jpg";
import img481 from "../images/img481.jpg";
import img527 from "../images/img527.jpg";

const Set1 = () => {
  return (
    <div className="set">
      <div className="set__container">
        <img src={img442} alt={"portrai of man"} />
      </div>
      <div className="set__container">
        <img src={img426} alt={"portrai of woman and a boy"} />
      </div>
      <div className="set__container">
        <img src={img481} alt={"portrai of old woman"} />
      </div>
      <div className="set__container">
        <img src={img527} alt={"portrai of two man"} />
      </div>
    </div>
  );
};

export default Set1;
