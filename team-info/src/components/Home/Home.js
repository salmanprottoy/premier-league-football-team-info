import React from "react";
import FooterInfo from "../FooterInfo/FooterInfo";
import Teams from "../Teams/Teams";
import Topbar from "../Topbar/Topbar";
import "./Home.css";

const Home = () => {
  const title = "Premier League Football Team Info";
  return (
    <div className="home">
      <Topbar title={title}></Topbar>
      <Teams />
      <FooterInfo />
    </div>
  );
};

export default Home;
