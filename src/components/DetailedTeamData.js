import React from "react";
import { Link } from "react-router-dom";
import "./DetailedTeamData.scss";

function DetailedTeamData({ match, teamName }) {
  if (match == null) return null;
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const isWinner = teamName === match.matchWinner;
  return (
    <div
      className={isWinner ? "DetailedTeamData won" : "DetailedTeamData loss"}
    >
      <div className="match-info">
        <Link to={`/teams/${otherTeam}`}>
          <h3 className="other-team">vs {otherTeam}</h3>
        </Link>
        <h4 className="venue">
          venue: {match.venue} at {match.city}
        </h4>
        <h4 className="date">held on: {match.date}</h4>
        <h4 className="winner">
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </h4>
      </div>
      <div className="additional-info">
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.team2}</p>
        <h3>Man of the match</h3>
        <p>{match.playerOfMatch}</p>
        <h3>Umpires</h3>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
    </div>
  );
}

export default DetailedTeamData;
