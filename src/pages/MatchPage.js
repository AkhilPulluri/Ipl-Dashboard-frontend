import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import DetailedTeamData from "../components/DetailedTeamData";
import "./MatchPage.scss";
import YearSelector from "../components/YearSelector";

function MatchPage() {
  const [matchData, setMatchData] = useState([]);
  const { year, teamName } = useParams();

  useEffect(() => {
    const fetchMatchData = () =>
      axios({
        url: `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`,
        method: "GET",
      })
        .then((res) => {
          setMatchData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    fetchMatchData();
  }, [year, teamName]);

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3 className="select-year">year</h3>
        <YearSelector teamName={teamName} />
      </div>
      {matchData.length !== 0 ? (
        <div className="match-data-selector">
          <h2 className="match-header">
            {teamName} played in year {year}
          </h2>
          {matchData.map((match) => (
            <DetailedTeamData
              key={match.id}
              teamName={teamName}
              match={match}
            />
          ))}
        </div>
      ) : (
        <div className="matchDataNull">
          <h3>
            sorry, {teamName} doesn't play the matches on {year} please select
            another year
          </h3>
        </div>
      )}
    </div>
  );
}

export default MatchPage;
