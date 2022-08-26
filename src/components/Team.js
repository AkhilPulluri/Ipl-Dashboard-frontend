import React from "react";
import { Link } from "react-router-dom";
import "./Team.scss";

function Team({ teamName, src }) {
  return (
    <div className="team">
      <Link to={`/teams/${teamName}`}>
        <img className="logo" src={src} alt="img not available"></img>
      </Link>
    </div>
  );
}

export default Team;
