import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterInfo = () => {
  return (
    <div className="text-white p-3">
      &copy; {new Date().getFullYear()} Developed by{" "}
      <a className="text-white" href="https://github.com/salmanprottoy">
        {" "}
        <FontAwesomeIcon icon={faGithub} /> Salman Prottoy{" "}
      </a>
      {"."} All Rights Reserved.
    </div>
  );
};

export default FooterInfo;
