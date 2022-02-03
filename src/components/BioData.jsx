import React from "react";
import Skills from "./Skills";
import Interests from "./Interests";

const BioData = (propos) => {
  return (
    <div className="bio-data">
      <h2>CV of {propos.name}</h2>
      <div className="personal-Info">
        <h2>Personal Info</h2>
        <p>mobile: {propos.mobile}</p>
        <p>email: {propos.email}</p>
        <p>Linkdin: {propos.linkdin}</p>
        <p>Github: {propos.github}</p>
      </div>

      <hr />

      <Skills skills={propos.skills} />

      <hr />

      <Interests interests={propos.interests} />
    </div>
  );
};

export default BioData;
