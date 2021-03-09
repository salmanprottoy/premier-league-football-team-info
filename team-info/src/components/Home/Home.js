import React from "react";
import Teams from "../Teams/Teams";
import Topbar from "../Topbar/Topbar";

const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <Teams />
    </div>
  );
};

export default Home;
