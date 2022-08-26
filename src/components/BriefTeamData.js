import React from "react";
import { Link } from "react-router-dom";
import "./BriefTeamData.scss";

function BriefTeamData({ match, teamName }) {
  if (match == null) return null;
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const isWinner = teamName === match.matchWinner;
  return (
    <div className={isWinner ? "BriefTeamData won" : "BriefTeamData loss"}>
      <Link to={`/teams/${otherTeam}`}>
        <h3 className="other-team">vs {otherTeam}</h3>
      </Link>
      <h4 className="winner">
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h4>
      <h4 className="player-of-the-match">
        player of the match: {match.playerOfMatch}{" "}
      </h4>
    </div>
  );
}

export default BriefTeamData;
