import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.scss";
import Team from "../components/Team";
import csk from "../assets/ChennaiSuperKings.jpg";
import dc from "../assets/DelhiCapitals.jpg";
import gt from "../assets/GujratTitans.jpeg";
import kkr from "../assets/KKR.png";
import kochi from "../assets/KochiTuskers.jpg";
import lucknow from "../assets/LucknowSuperGiants.jpg";
import mi from "../assets/MumbaiIndians.jpg";
import puneGiants from "../assets/PuneSuperGiants.jpg";
import puneWarriors from "../assets/PuneWarriors.jpg";
import punjabKings from "../assets/PunjabKings.jpg";
import rr from "../assets/RajasthanRoyals.jpg";
import rcb from "../assets/RoyalChanllengers.jpg";
import srh from "../assets/SunRisersHyderabad.jpg";
import profile from "../assets/ProfileIcon.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  const [teams, setTeams] = useState([]);

  const iplImages = {
    "Mumbai Indians": mi,
    "Pune Warriors": puneWarriors,
    "Sunrisers Hyderabad": srh,
    "Gujarat Titans": gt,
    "Lucknow Super Giants": lucknow,
    "Rajasthan Royals": rr,
    "Kolkata Knight Riders": kkr,
    "Royal Challengers Bangalore": rcb,
    "Punjab Kings": punjabKings,
    "Rising Pune Supergiant": puneGiants,
    "Kochi Tuskers Kerala": kochi,
    "Delhi Capitals": dc,
    "Chennai Super Kings": csk,
  };

  useEffect(() => {
    const fetchTeams = () =>
      axios({
        url: `${process.env.REACT_APP_API_ROOT_URL}/team`,
        method: "GET",
      })
        .then((res) => {
          setTeams(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    fetchTeams();
  }, []);
  if (teams.length !== 0) {
    return (
      <div className="HomePage">
        <div className="header">
          <div className="home-page-title">
            <h3>IPL Dashboard</h3>
          </div>

          <div className="home-page-profile-info">
            <span>Developer</span>
            <Link to="/ipl-dashboard/developerinfo">
              <img
                className="profile-logo"
                src={profile}
                alt="img not available"
              ></img>
            </Link>
          </div>
        </div>
        <div className="home-body">
          {teams.map((team) => (
            <Team
              key={team.id}
              src={iplImages[team.teamName]}
              teamName={team.teamName}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
