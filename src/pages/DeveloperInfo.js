import React from "react";
import developerImage from "../assets/Developer-img.jpg";
import "./DeveloperInfo.scss";
function DeveloperInfo() {
  return (
    <div className="DevInfo">
      <div className="card">
        <img
          className="card-img-top"
          src={developerImage}
          alt="Card image cap"
        />
        <div className="card-body">
          <h2 className="card-title">Akhil Pulluri</h2>
          <h4 className="card-text">Aspiring FullStack Developer</h4>
        </div>
      </div>
    </div>
  );
}

export default DeveloperInfo;
