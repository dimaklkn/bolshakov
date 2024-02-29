import React from "react";
import img516 from "../images/img516.jpg";
import img479 from "../images/img479.jpg";
import img541 from "../images/img541.jpg";
import img540 from "../images/img540.jpg";

const Set3 = () => {
  return (
    <div className="set">
      <div className="set__container">
        <img src={img516} alt={"portrait of woman"} />
      </div>
      <div className="set__container">
        <img src={img479} alt={"portrait of two women"} />
      </div>
      <div className="set__container">
        <img src={img541} alt={"portrait of woman"} />
      </div>
      <div className="set__container">
        <img src={img540} alt={"family portrait"} />
      </div>
    </div>
  );
};

export default Set3;
