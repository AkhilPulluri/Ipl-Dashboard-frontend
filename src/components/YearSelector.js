import React from "react";
import { Link } from "react-router-dom";
import "./YearSelector.scss";

function YearSelector({ teamName }) {
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;
  const yearList = [];

  for (let year = startYear; year <= endYear; year++) {
    yearList.push(year);
  }

  return (
    <div className="year-selector">
      <ol>
        {yearList.map((year) => (
          <li className="year-list" key={year}>
            <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
          </li>
        ))}
      </ol>
      <Link to="/"> {"<<"}Home Page</Link>
    </div>
  );
}

export default YearSelector;
