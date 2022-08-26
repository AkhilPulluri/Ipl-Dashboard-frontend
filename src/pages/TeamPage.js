import React, { useEffect, useState } from "react";
import BriefTeamData from "../components/BriefTeamData";
import DetailedTeamData from "../components/DetailedTeamData";
import axios from "axios";
import { useParams } from "react-router";
import "./TeamPage.scss";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

function TeamPage() {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeam = () =>
      axios({
        url: `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`,
        method: "GET",
      })
        .then((res) => {
          setTeam(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    fetchTeam();
  }, [teamName]);
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        <h1>wins/losses</h1>
        <PieChart
          data={[
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#ff4d4d",
            },
            { title: "Wins", value: team.totalWins, color: "#47d147" },
          ]}
        />
      </div>
      <div className="detailed-data-section">
        <h3>LatestMatches</h3>
        <DetailedTeamData teamName={team.teamName} match={team.matches[0]} />
      </div>
      {team.matches.slice(1).map((match) => (
        <BriefTeamData key={match.id} teamName={team.teamName} match={match} />
      ))}
      <div className="more-info">
        <Link
          to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
        >
          More Info {">>"}{" "}
        </Link>
        <Link to="/"> {"<<"}Home Page</Link>
      </div>
    </div>
  );
}
export default TeamPage;
